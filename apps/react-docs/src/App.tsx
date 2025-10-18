import React, { useEffect, useRef, useState } from 'react';

import ImageMapper from 'react-img-mapper';

import CONSTANTS from '@/constants';
import { useAreas } from '@/hooks/useAreas';

import type { FC } from 'react';
import type { MapArea, RefProperties } from 'react-img-mapper';

const { url, name } = CONSTANTS;

const App: FC = () => {
  const { areas: initialAreas } = useAreas();

  const [areas, setAreas] = useState<MapArea[]>(initialAreas);
  const [parentWidth, setParentWidth] = useState<number>(640);
  const ref = useRef<RefProperties>(null);

  useEffect(() => {
    // console.log(ref.current.style.width);
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
        src={url}
        // onChange={(selectedArea, allAreas) => {
        //   console.log(selectedArea, allAreas);
        //   setAreas(allAreas);
        // }}
        // width={parentWidth}
        // height={480}
        // imgWidth={parentWidth}
        // natural={natural}
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
      <button onClick={() => setAreas(JSON)} type="button">
        Clear
      </button>
      {/* <button onClick={() => setNatural((prev) => !prev)} type="button">
        natural
      </button> */}
      <button onClick={() => console.log(ref.current?.getRefs())} type="button">
        Get Ref
      </button>
    </React.Fragment>
  );
};

export default App;
