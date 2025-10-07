import mapper from '@/functions/mapper';

export const fillColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
    />
  )`);

export const inArrayFillColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
    />
  )`);

export const dynamicFillColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      fillColor={props.fillColor} // dynamic fill color
   />
  )`);

export const dynamicMixArrayFillColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      fillColor={props.fillColor} // dynamic fill color
   />
  )`);

export const strokeColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      lineWidth={2}
   />
  )`);

export const inArrayStrokeColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      lineWidth={2}
   />
  )`);

export const dynamicStrokeColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      strokeColor={props.strokeColor} // dynamic stroke color
      lineWidth={props.lineWidth} // dynamic stroke line width
   />
  )`);

export const dynamicMixArrayStrokeColorCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      strokeColor={props.strokeColor} // dynamic stroke color
      lineWidth={props.lineWidth} // dynamic stroke line width
   />
  )`);
