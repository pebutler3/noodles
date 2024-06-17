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
  (e: 'btn-click', event: Event): void
}>()

let btnClass = `btn btn-${props.kind}`

if (props.dismissable) {
  btnClass += ' btn--dismissable'
}
</script>

<template>
  <button :class="classes || btnClass" @click="emit('btn-click', $event)">
    {{ title || 'Click Me' }}
    <slot />
  </button>
</template>
