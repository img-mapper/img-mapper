# Installation {#installation}

::: warning

`vue-img-mapper` is currently in beta. Features and APIs are still evolving and improvements are coming soon.

:::

Install **vue-img-mapper** using your preferred package manager:

::: code-group

```sh [npm]
$ npm install vue-img-mapper
```

```sh [yarn]
$ yarn add vue-img-mapper
```

```sh [pnpm]
$ pnpm install vue-img-mapper
```

:::

## Usage Example

Integrate `vue-img-mapper` into your Vue app:

```javascript
<template>
  <ImageMapper :src="src" :map="map" />
</template>

<script>
import ImageMapper from 'vue-img-mapper';

export default {
  name: 'Mapper',
  components: { ImageMapper },
  computed: {
    src: () => 'https://img-mapper-examples.nishargshah.dev/assets/example.jpg',
    map() {
      return {
        name: 'my-map',
        // Get JSON from below URL as an Example and put it here
        areas: 'https://img-mapper-examples.nishargshah.dev/assets/areas.json',
      };
    },
  },
};
</script>
```
