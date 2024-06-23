<script lang="ts" setup>
interface BadgeProps {
  text?: string
  title?: string
  outlined?: boolean
}

defineProps<BadgeProps>()

const emit = defineEmits<{
  (e: 'badge-click', event: Event): void
}>()
</script>

<template>
  <span @click="emit('badge-click', $event)">
    {{ text || 'Click Me' }}
    <slot />
  </span>
</template>
