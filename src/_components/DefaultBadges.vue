<script lang="ts" setup>
import Badge from '../components/Badge.vue';
import DismissButton from '../components/DismissButton.vue';
defineProps<{
  dismissable?: boolean
}>()
</script>

<template>
  <template v-if="!dismissable">
    <Badge text="Primary" class="badge badge-primary" />
    <Badge text="Secondary" class="badge badge-secondary" />
    <Badge text="Success" class="badge badge-success" />
    <Badge text="Danger" class="badge badge-danger" />
    <Badge text="Warning" class="badge badge-warning" />
    <Badge text="Info" class="badge badge-info" />
    <Badge text="Link" class="badge badge-link" />
  </template>
  <template v-else>
    <Badge text="Primary" class="badge badge-primary">
      <DismissButton />
    </Badge>
    <Badge text="Secondary" class="badge badge-secondary">
      <DismissButton />
    </Badge>
    <Badge text="Success" class="badge badge-success">
      <DismissButton />
    </Badge>
    <Badge text="Danger" class="badge badge-danger">
      <DismissButton />
    </Badge>
    <Badge text="Warning" class="badge badge-warning">
      <DismissButton />
    </Badge>
    <Badge text="Info" class="badge badge-info">
      <DismissButton />
    </Badge>
    <Badge text="Link" class="badge badge-link">
      <DismissButton />
    </Badge>
  </template>
</template>