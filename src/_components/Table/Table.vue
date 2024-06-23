<script lang="ts" setup>
import TableHeaderOrData from './TableHeaderOrData.vue';

interface TableData {
  prop: string
  type: string
  default: string
}

defineProps<{
  headers?: string[] | null
  tableData?: TableData[]
}>()
</script>

<template>
  <table class="w-100">
    <thead>
      <tr>
        <TableHeaderOrData v-for="header in headers" :header="header" />
      </tr>
    </thead>
    <tbody>
      <tr v-for="data in tableData" :key="data.prop">
        <td v-for="d in data">
          {{ d }}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
table {
  margin-top: 0.5rem;
  border-collapse: collapse;
}
</style>