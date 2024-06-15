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
    <Button title="Primary" @btnClick="test" />
    <Button title="Secondary" kind="secondary" @btnClick="test"/>
    <Button title="Success" kind="success" @btnClick="test"/>
    <Button title="Danger" kind="danger" @btnClick="test"/>
    <Button title="Warning" kind="warning" @btnClick="test"/>
    <Button title="Info" kind="info" @btnClick="test"/>
    <Button title="Link" kind="link" @btnClick="test"/>
  </template>
  <template v-else>
    <Button title="Primary" kind="primary">
      <DismissButton />
    </Button>
    <Button title="Secondary" kind="secondary">
      <DismissButton />
    </Button>
    <Button title="Secondary" kind="success">
      <DismissButton />
    </Button>
    <Button title="Danger" kind="danger">
      <DismissButton />
    </Button>
    <Button title="Warning" kind="warning">
      <DismissButton />
    </Button>
    <Button title="Info" kind="info">
      <DismissButton />
    </Button>
    <Button title="Link" kind="link">
      <DismissButton />
    </Button>
  </template>
</template>