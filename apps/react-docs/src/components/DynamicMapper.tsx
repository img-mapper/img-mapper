import { Fragment, useEffect, useState } from 'react';

import ImageMapper from 'react-img-mapper';

import CONSTANTS from '@/constants';
import { useAreas } from '@/hooks/useAreas';

import type { ImageMapperProps } from 'react-img-mapper';

import type { Component } from '@/types';

const { url, name } = CONSTANTS;

type DynamicMapperProps = Omit<ImageMapperProps, 'src' | 'name' | 'areas' | 'onChange'>;

const DynamicMapper: Component<DynamicMapperProps> = (props) => {
  const { areas: initialAreas } = useAreas();

  const [areas, setAreas] = useState(initialAreas);

  useEffect(() => {
    if (areas.length === 0) {
      setAreas(
        initialAreas.map((cur) => {
          const temp = { ...cur };

          if (['Front Wall', 'Window'].includes(cur.title)) {
            delete temp.fillColor;
            delete temp.strokeColor;
            return temp;
          }

          return temp;
        }),
      );
    }
  }, [areas.length, initialAreas]);

  if (areas.length === 0) return null;

  return (
    <Fragment>
      <div className="top_container">
        <h1 className="title">Dynamic All Properties Example</h1>
        <div className="top_content">
          <p>
            In this example, I have tried to merge all the{' '}
            <span className="tag">functionalities</span> that I have created till{' '}
            <span className="tag">now</span>.
            <br />
            <br />
            <span className="block">So just play with it and have fun 🤪</span>
          </p>
        </div>
      </div>
      <ImageMapper
        {...props}
        areas={areas}
        name={name}
        onChange={(_, newAreas) => setAreas(newAreas)}
        src={url}
      />
    </Fragment>
  );
};

export default DynamicMapper;
