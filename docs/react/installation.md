# Installation {#installation}

Install **react-img-mapper** using your preferred package manager:

::: code-group

```sh [npm]
$ npm install react-img-mapper
```

```sh [yarn]
$ yarn add react-img-mapper
```

```sh [pnpm]
$ pnpm install react-img-mapper
```

:::

## Usage Example

Integrate `react-img-mapper` into your React app:

```javascript
import React from 'react';
import ImageMapper from 'react-img-mapper';

const Mapper = () => {
  const url = 'https://img-mapper-examples.nishargshah.dev/assets/example.jpg';
  const name = 'my-map';
  // Get JSON from below URL as an example and put it here
  const areas = 'https://img-mapper-examples.nishargshah.dev/assets/areas.json';

  return <ImageMapper src={url} name={name} areas={areas} />;
};

export default Mapper;
```
