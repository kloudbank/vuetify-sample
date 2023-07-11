<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <ConstrainedBoard v-bind:count="count">
  </ConstrainedBoard>
</template>

<script setup>
import ConstrainedBoard from '@/components/ConstrainedBoard.vue'

const count = 5
</script>
