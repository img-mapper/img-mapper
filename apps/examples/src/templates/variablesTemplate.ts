import CONSTANTS from '@/constants';

const { url, name, areasUrl } = CONSTANTS;

const variablesTemplate = `const url = '${url}';
  const name = '${name}';
  // Get JSON from below URL as an Example and put it here
  const areas = '${areasUrl}';`;

export default variablesTemplate;
