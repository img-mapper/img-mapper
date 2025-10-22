<script setup lang="ts">
import { hello } from '@/helpers/area';
import { ref } from 'vue';

const { type } = defineProps<{
  type?: 'primary';
}>();

const counter = ref(0);

const handleClick = () => {
  counter.value += 1;
};
</script>

<template>
  <p>Hello World {{ counter }}</p>
  <p>{{ type }}</p>
  <button @click="handleClick">Click</button>
  <button @click="hello">Hello</button>
</template>
