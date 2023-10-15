<script setup lang="ts">
const emit = defineEmits<{(event: 'update:value', value: string): void }>()

const props = withDefaults(defineProps<{ value?: string, type?:string }>(), { value: '', type: 'text' })
const onInput = (event: any) => {
  emit('update:value', event.target.value)
}
</script>

<template>
  <input class='a-input' :type='type' v-bind='$attrs' @input='onInput'>
</template>

<style scoped lang="css">

</style>
