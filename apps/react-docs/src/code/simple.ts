import mapper from '@/functions/mapper';

const simpleCode = mapper(`(
    <ImageMapper 
      src={url} 
      name={name}
      areas={areas}
    />
  )`);

export default simpleCode;
