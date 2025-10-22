import React, { useEffect, useRef, useState } from 'react';

import ImageMapper from '@/ImageMapper';
import { useAreas } from '@playground/hooks/useAreas';

import type { FC } from 'react';

import type { MapArea, RefProperties } from '@/@types';

const name = 'my-map';
const url = 'https://img-mapper-examples.nishargshah.dev/assets/example.jpg';

const ReactPlayground: FC = () => {
  const { areas: initialAreas } = useAreas();

  const [areas, setAreas] = useState<MapArea[]>(initialAreas);
  const [parentWidth, setParentWidth] = useState<number>(640);
  const [responsive, setResponsive] = useState(false);
  const ref = useRef<RefProperties>(null);

  useEffect(() => {
    if (ref.current) {
      console.log(ref.current.getRefs());
    }
  }, []);

  const handleClick = () => {
    const area = areas.map((cur: MapArea, i: number) => {
      if (i % 4 === 0) {
        const temp = { ...cur };
        temp.preFillColor = 'red';
        return temp;
      }

      return cur;
    });
    setAreas(area);
  };

  useEffect(() => {
    if (areas.length === 0) setAreas(initialAreas);
  }, [initialAreas, areas.length]);

  if (areas.length === 0) return null;

  return (
    <React.Fragment>
      <ImageMapper
        ref={ref}
        areas={areas}
        name={name}
        onLoad={(...arg) => console.log('onLoad =>>>>>>>>>>>>', arg)}
        parentWidth={responsive ? parentWidth : 0}
        responsive={responsive}
        src={url}
        onChange={(selectedArea, allAreas) => {
          console.log(selectedArea, allAreas);
          setAreas(allAreas);
        }}
      />
      <input
        max={1000}
        min={100}
        onChange={(e) => setParentWidth(e.target.valueAsNumber)}
        step={40}
        type="range"
        value={parentWidth}
      />
      <button onClick={handleClick} type="button">
        Highlight
      </button>
      <button onClick={() => setAreas(initialAreas)} type="button">
        Clear
      </button>
      <button onClick={() => setResponsive((prev) => !prev)} type="button">
        {responsive ? 'Enabled: Responsive' : 'Enable: Responsive'}
      </button>
      <button onClick={() => console.log(ref.current?.getRefs())} type="button">
        Get Ref
      </button>
    </React.Fragment>
  );
};

export default ReactPlayground;
