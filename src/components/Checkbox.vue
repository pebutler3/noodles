<script lang="ts" setup>
defineProps<{
  classes?: string[] | null
  disabled?: boolean
  inputId?: string
  label?: string
}>()
</script>

<template>
  <div :class="classes || 'checkbox'">
    <input class="checkbox-input" type="checkbox" value="" :id="inputId" :disabled="disabled">
    <label class="checkbox-label" :for="inputId">
      {{ label || 'Checkbox' }}
    </label>
  </div>
</template>

<style lang="scss" scoped>
.checkbox {
  align-items: center;
  display: flex;

  &-input {
    flex-shrink: 0;
    width: 1em;
    height: 1em;
    margin-top: .25em;
    vertical-align: top;
    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
    background-color: #fff;
    background-image: var(--checkbox-bg-image);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    border: 1px solid;
    -webkit-print-color-adjust: exact;
    color-adjust: exact;
    print-color-adjust: exact;

    &:checked {
      background-color: var(--color-primary);
      border-color: var(--color-primary);
    }
  }

  &-input:disabled {
    opacity: 0.5;

    ~ label {
      opacity: 0.5;
    }
  }
}
</style>
