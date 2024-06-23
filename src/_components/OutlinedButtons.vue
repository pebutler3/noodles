<script lang="ts" setup>
import Button from '../components/Button.vue';
import DismissButton from '../components/DismissButton.vue';

defineProps<{
  dismissable?: boolean
}>()
</script>

<template>
  <template v-if="!dismissable">
    <Button text="Primary" class="btn btn-primary--outlined" />
    <Button text="Secondary" class="btn btn-secondary--outlined" />
    <Button text="Success" class="btn btn-success--outlined" />
    <Button text="Danger" class="btn btn-danger--outlined" />
    <Button text="Warning" class="btn btn-warning--outlined" />
    <Button text="Info" class="btn btn-info--outlined" />
  </template>
  <template v-else>
    <Button text="Primary" class="btn btn-primary--outlined">
      <DismissButton />
    </Button>
    <Button text="Secondary" class="btn btn-secondary--outlined">
      <DismissButton />
    </Button>
    <Button text="Secondary" class="btn btn-success--outlined">
      <DismissButton />
    </Button>
    <Button text="Danger" class="btn btn-danger--outlined">
      <DismissButton />
    </Button>
    <Button text="Warning" class="btn btn-warning--outlined">
      <DismissButton />
    </Button>
    <Button text="Info" class="btn btn-info--outlined">
      <DismissButton />
    </Button>
  </template>
</template>