<script lang="ts" setup>
import DefaultBadges from '../DefaultBadges.vue';
import OutlinedBadges from '../OutlinedBadges.vue';
</script>

<template>
  <div>
    <h2>Badges</h2>
    <section class="d-flex flex-wrap gap-05">
      <DefaultBadges />
      <div class="w-100">
        <section class="d-flex flex-wrap gap-05">
          <OutlinedBadges />
        </section>
      </div>
      <div class="w-100 mt-1">
        <h3>Dismissable</h3>
        <section class="d-flex flex-wrap gap-05">
          <DefaultBadges :dismissable="true" />
          <div class="w-100">
            <section class="d-flex flex-wrap gap-05">
              <OutlinedBadges :dismissable="true" />
            </section>
          </div>
        </section>
      </div>
    </section>
  </div>
</template>