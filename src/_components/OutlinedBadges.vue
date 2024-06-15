<script lang="ts" setup>
import Badge from '../components/Badge.vue';
import DismissButton from '../components/DismissButton.vue';
defineProps<{
  dismissable?: boolean
}>()

const test = (event: Event) => {
  console.log(event)
}
</script>

<template>
  <template v-if="!dismissable">
  <Badge title="Primary" kind="primary--outlined" />
  <Badge title="Secondary" kind="secondary--outlined" />
  <Badge title="Success" kind="success--outlined" />
  <Badge title="Danger" kind="danger--outlined" />
  <Badge title="Warning" kind="warning--outlined" />
  <Badge title="Info" kind="info--outlined" />
  </template>
  <template v-else>
  <Badge title="Primary" kind="primary--outlined">
    <DismissButton @dismiss="test" />
  </Badge>
  <Badge title="Secondary" kind="secondary--outlined">
    <DismissButton />
  </Badge>
  <Badge title="Success" kind="success--outlined">
    <DismissButton />
  </Badge>
  <Badge title="Danger" kind="danger--outlined">
    <DismissButton />
  </Badge>
  <Badge title="Warning" kind="warning--outlined">
    <DismissButton />
  </Badge>
  <Badge title="Info" kind="info--outlined">
    <DismissButton />
  </Badge>
  </template>
</template>