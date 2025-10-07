import mapper from '@/functions/mapper';

export const nonResponsiveDimensionsCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      width={props.width} // dynamic width
      height={props.height} // dynamic height
      imageWidth={props.imageWidth} // dynamic imageWidth
      natural={props.natural} // dynamic natural
   />
  )`);

export const responsiveDimensionsCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      responsive
      parentWidth={props.parentWidth} // dynamic parentWidth
   />
  )`);

export const allDimensionsCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      width={props.width} // dynamic width
      height={props.height} // dynamic height
      imgWidth={props.imgWidth} // dynamic imgWidth
      natural={props.natural} // dynamic natural
      responsive={props.responsive} // dynamic responsive
      parentWidth={props.parentWidth} // dynamic parentWidth
   />
  )`);
