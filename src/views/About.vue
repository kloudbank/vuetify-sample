<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ConstrainedAbout v-bind:count="count"></ConstrainedAbout>
</template>

<script setup>
import ConstrainedAbout from '@/components/ConstrainedAbout.vue'

const count = 3
</script>
