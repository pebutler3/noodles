<script lang="ts" setup>
import Checkbox from '@/components/Checkbox.vue';
</script>
<template>
  <h2>Form Elements</h2>
  <section class="d-flex flex-wrap gap-05">
    <Checkbox inputId="SampleCheckbox" />
    <Checkbox inputId="SampleCheckboxDisabled" label="Disabled Checkbox" :disabled="true" />
  </section>
</template>
