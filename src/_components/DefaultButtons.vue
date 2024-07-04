<script lang="ts" setup>
import Button from '../components/Button.vue';
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
    <Button text="Primary" class="btn btn-primary" @btnClick="test" />
    <Button text="Secondary" class="btn btn-secondary" outlined />
    <Button text="Success" class="btn btn-success" />
    <Button text="Danger" class="btn btn-danger" />
    <Button text="Warning" class="btn btn-warning" />
    <Button text="Info" class="btn btn-info" />
    <Button text="Link" class="btn btn-link" />
    <Button text="Primary Disabled" class="btn btn-primary" disabled />
  </template>
  <template v-else>
    <Button text="Primary" class="btn btn-primary">
      <DismissButton />
    </Button>
    <Button text="Secondary" class="btn btn-secondary">
      <DismissButton />
    </Button>
    <Button text="Secondary" class="btn btn-success">
      <DismissButton />
    </Button>
    <Button text="Danger" class="btn btn-danger">
      <DismissButton />
    </Button>
    <Button text="Warning" class="btn btn-warning">
      <DismissButton />
    </Button>
    <Button text="Info" class="btn btn-info">
      <DismissButton />
    </Button>
    <Button text="Link" class="btn btn-link">
      <DismissButton />
    </Button>
  </template>
</template>