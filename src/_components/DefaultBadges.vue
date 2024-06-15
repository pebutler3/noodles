<script lang="ts" setup>
import Badge from '../components/Badge.vue';
import DismissButton from '../components/DismissButton.vue';
defineProps<{
  dismissable?: boolean
}>()
</script>

<template>
  <template v-if="!dismissable">
    <Badge title="Primary" kind="primary" />
    <Badge title="Secondary" kind="secondary" />
    <Badge title="Success" kind="success" />
    <Badge title="Danger" kind="danger" />
    <Badge title="Warning" kind="warning" />
    <Badge title="Info" kind="info" />
    <Badge title="Link" kind="link" />
  </template>
  <template v-else>
    <Badge title="Primary" kind="primary">
      <DismissButton />
    </Badge>
    <Badge title="Secondary" kind="secondary">
      <DismissButton />
    </Badge>
    <Badge title="Success" kind="success">
      <DismissButton />
    </Badge>
    <Badge title="Danger" kind="danger">
      <DismissButton />
    </Badge>
    <Badge title="Warning" kind="warning">
      <DismissButton />
    </Badge>
    <Badge title="Info" kind="info">
      <DismissButton />
    </Badge>
    <Badge title="Link" kind="link">
      <DismissButton />
    </Badge>
  </template>
</template>