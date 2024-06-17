<script lang="ts" setup>
const props = withDefaults(defineProps<{
  classes?: string[] | null
  title?: string
  kind?: (
    'primary' |
    'primary--outlined' |
    'secondary' |
    'secondary--outlined' |
    'success' |
    'success--outlined' |
    'danger' |
    'danger--outlined' |
    'warning' |
    'warning--outlined' |
    'info' |
    'info--outlined' |
    'link'
  )
  dismissable?: boolean
}>(), {
  kind: 'primary',
})

const emit = defineEmits<{
  (e: 'badge-click', event: Event): void
}>()

let badgeClasses = `badge badge-${props.kind}`

if (props.dismissable) {
  badgeClasses += ' badge--dismissable'
}
</script>

<template>
  <span :class="classes || badgeClasses" @click="emit('badge-click', $event)">
    {{ title || 'Click Me' }}
    <slot />
  </span>
</template>
