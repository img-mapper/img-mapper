<script setup lang="ts">
import ImageMapper from '@/ImageMapper.vue';
import { useAreas } from '@playground/composables/useAreas';
import { ref } from 'vue';

const name = 'my-map';
const url = 'https://img-mapper-examples.nishargshah.dev/assets/example.jpg';

const { areas } = useAreas();

const imageMapperRef = ref(null);

const handleClick = () => {
  console.log(imageMapperRef.value?.getRefs());
};
</script>

<template>
  <template v-if="areas.length">
    <button @click="handleClick">Button</button>
    <ImageMapper
      ref="imageMapperRef"
      :src="url"
      :name="name"
      :areas="areas"
      :container-props="{
        class: 'containerClass',
        style: {
          backgroundColor: 'red',
        },
      }"
      :img-props="{
        class: '123',
      }"
    />
  </template>
</template>
