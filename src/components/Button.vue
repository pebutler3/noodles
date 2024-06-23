<script lang="ts" setup>
interface ButtonProps {
  text?: string
}

defineProps<ButtonProps>()

const emit = defineEmits<{
  (e: 'btn-click', event: Event): void
}>()
</script>

<template>
  <button @click="emit('btn-click', $event)">
    {{ text || 'Click Me' }}
    <slot />
  </button>
</template>
