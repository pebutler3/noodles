<script lang="ts" setup>
defineProps<{
  header?: string | null
  td?: string | null 
}>()
</script>

<template>
  <th v-if="header">{{ header }}</th>
  <td v-if="td">{{ td }}</td>
</template>

<style lang="scss">
th {
  background-color: black;
  color: white;
  text-align: left;
  text-transform: uppercase;

  &:not(:last-of-type) {
    border-right: 1px solid;
  }
}

th, td {
  padding: 0.5rem;
}

tr:nth-child(odd) {
  border-bottom: 1px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
}

td:not(:last-of-type) {
  border-right: 1px solid;;
}
</style>