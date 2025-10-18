import { useState } from 'react';

import Mapper from '@/components/Mapper';
import TopComponent from '@/components/TopComponent';

import type { ImageMapperProps } from 'react-img-mapper';

import type { Component } from '@/types';

type ZoomInZoomOutAreaCompProps = Pick<ImageMapperProps, 'parentWidth'>;

const ZoomInZoomOutAreaComp: Component<ZoomInZoomOutAreaCompProps> = (props) => {
  const minWidth = 400;
  const { parentWidth = 100 } = props;

  const [zoom, setZoom] = useState(640);

  const handleZoom = (type: 'in' | 'out') => {
    setZoom((prev) => {
      if (prev <= minWidth && type === 'out') return prev;
      return type === 'in' ? prev + parentWidth : prev - parentWidth;
    });
  };

  return (
    <Mapper
      responsive
      parentWidth={zoom}
      TopComponent={() =>
        TopComponent(
          'Zoom In & Zoom Out Area',
          <p>
            In this example, Zoom is based on the <span className="tag">parentWidth</span> that you
            can change by the <span className="tag">control tab</span>, you can press the below
            buttons to see the <span className="tag">live</span> results in image mapper
            <br />
            <br />
            <button onClick={() => handleZoom('in')} style={{ marginRight: 8 }} type="button">
              Zoom In
            </button>
            <button onClick={() => handleZoom('out')} type="button">
              Zoom Out
            </button>
          </p>,
        )
      }
    />
  );
};

export default ZoomInZoomOutAreaComp;
