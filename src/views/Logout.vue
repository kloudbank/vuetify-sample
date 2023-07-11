<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div></div>
</template>

<script lang="ts" setup>
import userStore from '@/store'
import router from '@/router';
userStore.commit("logout", {});
router.push("/login");
</script>
