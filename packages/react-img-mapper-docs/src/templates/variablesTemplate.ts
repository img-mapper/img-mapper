import CONSTANTS from '@/constants';

const { url, name, areasUrl } = CONSTANTS;

const variablesTemplate = `const url = '${url}';
  const name = '${name}';
  // GET JSON FROM BELOW URL AS AN EXAMPLE
  const areas = '${areasUrl}';`;

export default variablesTemplate;
