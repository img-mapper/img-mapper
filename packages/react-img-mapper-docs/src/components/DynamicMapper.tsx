import CONSTANTS from '@/constants';
import { useAreas } from '@/hooks/useAreas';
import { Component } from '@/types';
import { Fragment, useEffect, useState } from 'react';
import ImageMapper, { ImageMapperProps } from 'react-img-mapper';

const { url, name } = CONSTANTS;

type DynamicMapperProps = Omit<ImageMapperProps, 'src' | 'name' | 'areas' | 'onChange'>;

const DynamicMapper: Component<DynamicMapperProps> = (props) => {
  const { areas: initialAreas } = useAreas();

  const [areas, setAreas] = useState(initialAreas);

  useEffect(() => {
    if (!areas.length) {
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
        ref={null}
        src={url}
        name={name}
        areas={areas}
        onChange={(_, newAreas) => setAreas(newAreas)}
      />
    </Fragment>
  );
};

export default DynamicMapper;
