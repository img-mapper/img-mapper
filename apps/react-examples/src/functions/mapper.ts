import variablesTemplate from '@/templates/variablesTemplate';

type Mapper = (code: string) => string;

const mapper: Mapper = (code) =>
  `import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = props => {
  ${variablesTemplate}
  
  return ${code}
}

export default Mapper;`;

export default mapper;
