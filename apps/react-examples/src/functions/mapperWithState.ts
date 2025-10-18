import CONSTANTS from '@/constants';

const { url, name, areasUrl } = CONSTANTS;

type MapperWithState = (code: string) => string;

const mapperWithState: MapperWithState = (code) =>
  `import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  const url = '${url}';
  const name = '${name}';
  
  // GET JSON FROM BELOW URL AND PUT IT INTO THE USE STATE HOOK
  // URL: ${areasUrl}
  const [areas, setAreas] = useState([]);
  
  return ${code}
}

export default Mapper;`;

export default mapperWithState;
