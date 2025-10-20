import { Fragment, useEffect, useState } from 'react';

import ImageMapper from 'react-img-mapper';

import TopComponent from '@/components/TopComponent';
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
      {TopComponent(
        'Dynamic All Properties Example',
        <p>
          In this example, all the <span className="tag">functionalities</span> developed so far
          have been merged into a single demo.
          <br />
          <br />
          <span className="block">Feel free to explore and have fun experimenting!</span>
        </p>,
      )}
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
