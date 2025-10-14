import CONSTANTS from '@/constants';
import { useAreas } from '@/hooks/useAreas';
import { Component } from '@/types';
import { Fragment, ReactNode, useCallback, useEffect, useState } from 'react';
import ImageMapper, { ImageMapperProps } from 'react-img-mapper';

type TopComponentProps = {
  resetAreas: () => void;
};

type BottomComponentProps = {
  resetAreas: () => void;
};

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
      return initialAreas.map((cur) => {
        const temp = { ...cur };

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
      return initialAreas.map((cur) => {
        const temp = { ...cur };

        if (['Front Wall', 'Window'].includes(cur.title)) {
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
      return initialAreas.map((cur) => {
        const temp = { ...cur };

        if (['Refrigerator', 'Window'].includes(cur.title)) {
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
    if (!areas.length) setAreas(getJSON());
  }, [areas.length, getJSON]);

  return (
    <Fragment>
      {TopComponent && <TopComponent resetAreas={resetAreas} />}
      <ImageMapper
        ref={null}
        {...restProps}
        src={url}
        name={name}
        areas={areas}
        onChange={(_, areas) => (isOnChangeNeeded ? setAreas(areas) : null)}
      />
      {BottomComponent && <BottomComponent resetAreas={resetAreas} />}
    </Fragment>
  );
};

export default Mapper;
