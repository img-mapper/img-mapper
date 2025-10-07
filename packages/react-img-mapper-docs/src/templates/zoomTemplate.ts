import variablesTemplate from '@/templates/variablesTemplate';

const zoomTemplate = `import React, { Fragment, useState } from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  const minWidth = 400;
  const [zoom, setZoom] = useState(640);

  ${variablesTemplate}

  const handleZoom = type => {
    setZoom(prev => {
      if (prev <= minWidth && type === 'out') return prev;
      return type === 'in' ? prev + props.zoomWidth : prev - props.zoomWidth;
    });
  };
  
  return (
    <Fragment>
      <ImageMapper
        src={url} 
        name={name}
        areas={areas}
        responsive
        parentWidth={zoom}
       />
       <button style={{ marginRight: 8 }} onClick={() => handleZoom('in')}>Zoom In</button>
       <button onClick={() => handleZoom('out')}>Zoom Out</button>
    </Fragment>
  )
}

export default Mapper;`;

export default zoomTemplate;
