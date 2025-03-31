<template>
<div class="titleBox">
  <h1>{{ props.title }}</h1>
</div>
</template>
<script setup>
import { ref, defineProps } from 'vue'

const props = defineProps({
  title: {
    type: String,
    default: 'Hello World'
  }
})
</script>
<style lang="scss" scoped>
</style>
