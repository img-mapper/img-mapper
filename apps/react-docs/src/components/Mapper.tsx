import { Fragment, useCallback, useEffect, useState } from 'react';

import ImageMapper from 'react-img-mapper';

import CONSTANTS from '@/constants';
import { useAreas } from '@/hooks/useAreas';

import type { ReactNode } from 'react';
import type { ImageMapperProps } from 'react-img-mapper';

import type { Component } from '@/types';

interface TopComponentProps {
  resetAreas: () => void;
}

interface BottomComponentProps {
  resetAreas: () => void;
}

type MapperProps = Omit<ImageMapperProps, 'src' | 'name' | 'areas' | 'onChange'> & {
  customJSON?: 0 | 1 | 2;
  customType?: 'fill' | 'stroke' | 'active' | 'disabled';
  isOnChangeNeeded?: boolean;
  TopComponent?: (props: TopComponentProps) => ReactNode;
  BottomComponent?: (props: BottomComponentProps) => ReactNode;
};

const { url, name } = CONSTANTS;

const Mapper: Component<MapperProps> = (props) => {
  const { customJSON, customType, isOnChangeNeeded, TopComponent, BottomComponent, ...restProps } =
    props;

  const { areas: initialAreas } = useAreas();

  const [areas, setAreas] = useState(initialAreas);

  const getJSON = useCallback(() => {
    if (customJSON === 0) {
      return initialAreas.map((item) => {
        const temp = { ...item } as typeof item;

        if (customType === 'fill') {
          delete temp.fillColor;
        }

        if (customType === 'stroke') {
          delete temp.fillColor;
          delete temp.strokeColor;
        }

        return temp;
      });
    }

    if (customJSON === 1) {
      return initialAreas.map((item) => {
        const temp = { ...item } as typeof item;

        if (['Front Wall', 'Window'].includes(item.title)) {
          if (customType === 'fill') {
            delete temp.fillColor;
          }

          if (customType === 'stroke') {
            delete temp.strokeColor;
          }

          return temp;
        }

        return temp;
      });
    }

    if (customJSON === 2) {
      return initialAreas.map((item) => {
        const temp = { ...item } as typeof item;

        if (['Refrigerator', 'Window'].includes(item.title)) {
          if (customType === 'active') {
            temp.active = false;
          }

          if (customType === 'disabled') {
            temp.disabled = true;
          }

          return temp;
        }

        return temp;
      });
    }

    return initialAreas;
  }, [initialAreas, customJSON, customType]);

  const resetAreas = () => setAreas(getJSON());

  useEffect(() => {
    if (areas.length === 0) setAreas(getJSON());
  }, [areas.length, getJSON]);

  return (
    <Fragment>
      {TopComponent ? <TopComponent resetAreas={resetAreas} /> : null}
      <ImageMapper
        ref={null}
        {...restProps}
        areas={areas}
        name={name}
        onChange={(_, newAreas) => (isOnChangeNeeded ? setAreas(newAreas) : null)}
        src={url}
      />
      {BottomComponent ? <BottomComponent resetAreas={resetAreas} /> : null}
    </Fragment>
  );
};

export default Mapper;
