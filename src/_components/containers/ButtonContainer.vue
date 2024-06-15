<script lang="ts" setup>
import Button from '../../components/Button.vue';
import DefaultButtons from '../DefaultButtons.vue';
import OutlinedButtons from '../OutlinedButtons.vue';
</script>

<template>
  <div>
    <h2>Buttons</h2>
    <section class="d-flex flex-wrap gap-05">
      <DefaultButtons />
      <div class="w-100">
        <section class="d-flex flex-wrap gap-05">
          <OutlinedButtons />
        </section>
      </div>
      <div class="w-100 mt-1">
        <h3 class="m-0 mb-1">Dismissable</h3>
        <section class="d-flex flex-wrap gap-05">
          <DefaultButtons :dismissable="true" />
          <div class="w-100">
            <section class="d-flex flex-wrap gap-05">
              <OutlinedButtons :dismissable="true" />
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>