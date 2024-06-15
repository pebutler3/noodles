<script lang="ts" setup>
import Button from '../components/Button.vue';
import DismissButton from '../components/DismissButton.vue';

defineProps<{
  dismissable?: boolean
}>()
</script>

<template>
  <template v-if="!dismissable">
    <Button title="Primary" kind="primary--outlined" />
    <Button title="Secondary" kind="secondary--outlined" />
    <Button title="Success" kind="success--outlined" />
    <Button title="Danger" kind="danger--outlined" />
    <Button title="Warning" kind="warning--outlined" />
    <Button title="Info" kind="info--outlined" />
  </template>
  <template v-else>
    <Button title="Primary" kind="primary--outlined">
      <DismissButton />
    </Button>
    <Button title="Secondary" kind="secondary--outlined">
      <DismissButton />
    </Button>
    <Button title="Secondary" kind="success--outlined">
      <DismissButton />
    </Button>
    <Button title="Danger" kind="danger--outlined">
      <DismissButton />
    </Button>
    <Button title="Warning" kind="warning--outlined">
      <DismissButton />
    </Button>
    <Button title="Info" kind="info--outlined">
      <DismissButton />
    </Button>
  </template>
</template>