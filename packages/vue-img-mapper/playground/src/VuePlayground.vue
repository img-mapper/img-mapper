<script setup lang="ts">
import ImageMapper from '@/ImageMapper.vue';
import { useAreas } from '@playground/composables/useAreas';

const name = 'my-map';
const url = 'https://img-mapper-examples.nishargshah.dev/assets/example.jpg';

const { areas } = useAreas();
</script>

<template>
  <template v-if="areas.length">
    <ImageMapper :src="url" :name="name" :areas="areas" />
  </template>
</template>
