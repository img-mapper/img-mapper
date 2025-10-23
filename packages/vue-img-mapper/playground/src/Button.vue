<script setup lang="ts">
  import { ButtonHTMLAttributes, defineProps, defineEmits } from 'vue'

  const props = defineProps<{id: string}>();

  const emit = defineEmits<{
    click: [event: MouseEvent, text: string] | null,
    mousedown: [event: MouseEvent, text: string] | null
  }>()

  const handleClick = (e: MouseEvent) => {
    emit("click", e, "click");
  }

  const handleMouseDown = (e: MouseEvent) => {
    // emit('mousedown', e, "mousedown");
  }
</script>

<template>
  <div>
    <button :bind="props" @click="handleClick" @mousedown="handleMouseDown">Hello</button>
  </div>
</template>
