<script setup lang="ts">
import ButtonContainer from './_components/containers/ButtonContainer.vue';
import BadgeContainer from './_components/containers/BadgeContainer.vue';
import FormContainer from './_components/containers/FormContainer.vue';
</script>

<template>
  <h1>Noodles</h1>
  <ButtonContainer />
  <BadgeContainer />
  <FormContainer />
</template>

<style lang="scss">
@use 'assets/styles/colors' as color;
@use 'assets/styles/utils';

h2 {
  background-color: white;
  border: 1px solid;
  border-radius: 0.5rem;
  display: inline-block;
  left: 0.5rem;
  margin: 0;
  padding: 0 0.5rem;
  position: relative;
  top: 1rem;
}

section {
  border: 1px solid;
  border-radius: 0.5rem;
  padding: 2rem;

  // div {
  //   background: color.$lightGrey;
  //   padding: 1rem;
  // }

  section {
    border: none;
    padding: 0;
  }
}
</style>
