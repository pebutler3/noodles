<script lang="ts" setup>
defineProps<{
  code: string
}>()
</script>

<template>
  <span>{{ code }}</span>
</template>

<style lang="scss" scoped>
span {
  background-color: #2d2d2d;
  border-radius: 5px;
  color: #cc99cd;
  font-weight: bold;
  padding: 2px 5px;
}
</style>