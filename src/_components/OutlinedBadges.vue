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
  <Badge text="Primary" class="badge badge-primary--outlined" />
  <Badge text="Secondary" class="badge badge-secondary--outlined" />
  <Badge text="Success" class="badge badge-success--outlined" />
  <Badge text="Danger" class="badge badge-danger--outlined" />
  <Badge text="Warning" class="badge badge-warning--outlined" />
  <Badge text="Info" class="badge badge-info--outlined" />
  </template>
  <template v-else>
  <Badge text="Primary" class="badge badge-primary--outlined">
    <DismissButton @dismiss="test" />
  </Badge>
  <Badge text="Secondary" class="badge badge-secondary--outlined">
    <DismissButton />
  </Badge>
  <Badge text="Success" class="badge badge-success--outlined">
    <DismissButton />
  </Badge>
  <Badge text="Danger" class="badge badge-danger--outlined">
    <DismissButton />
  </Badge>
  <Badge text="Warning" class="badge badge-warning--outlined">
    <DismissButton />
  </Badge>
  <Badge text="Info" class="badge badge-info--outlined">
    <DismissButton />
  </Badge>
  </template>
</template>