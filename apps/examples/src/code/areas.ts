import mapper from '@/functions/mapper';
import mapperWithState from '@/functions/mapperWithState';

export const showHighlightedAreaCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      active={props.active} // dynamic active
   />
  )`);

export const inArrayShowHighlightedAreaCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
    />
  )`);

export const disabledAreaCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      disabled={props.disabled} // dynamic disabled
   />
  )`);

export const inArrayDisabledAreaCode = inArrayShowHighlightedAreaCode;

export const staySelectedHighlightedAreaCode = mapperWithState(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      onChange={(_, newAreas) => setAreas(newAreas)}
      isMulti={false}
   />
  )`);

export const stayMultipleSelectedHighlightedAreaCode = mapperWithState(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      onChange={(_, newAreas) => setAreas(newAreas)}
      isMulti
   />
  )`);

export const toggleStayHighlightedAreaCode = mapperWithState(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
      onChange={(_, newAreas) => setAreas(newAreas)}
      isMulti={props.isMulti} // dynamic isMulti
      toggle={props.toggle} // dynamic toggle
   />
  )`);

export { default as clearSelectedHighlightedAreaCode } from '@/templates/clearButtonTemplate';

export { default as zoomInZoomOutAreaCode } from '@/templates/zoomTemplate';
