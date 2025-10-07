import CONSTANTS from '@/constants';

const { url, name, areasUrl } = CONSTANTS;

const clearButtonTemplate = `import React, { Fragment } from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = () => {
  const url = '${url}';
  const name = '${name}';
  
  // GET JSON FROM BELOW URL AND PUT IT INTO THE USE STATE HOOK
  // URL: ${areasUrl}
  const initialAreas = [];
  const [areas, setAreas] = useState(initialAreas);
  
  return (
    <Fragment>
      <ImageMapper
        src={url} 
        name={name}
        areas={areas}
        onChange={(_, newAreas) => setAreas(newAreas)}
        isMulti
       />
       <button onClick={() => setAreas(initialAreas)}>Clear</button>
    </Fragment>
  )
}

export default Mapper;`;

export default clearButtonTemplate;
