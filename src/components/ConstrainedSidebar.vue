<template>
  <v-col cols="2">
    <v-sheet rounded="lg">
      <v-list rounded="lg">
        <v-list-item v-for="n in count" :key="n" link>
          <v-list-item-title>
            List Item {{ n }}
          </v-list-item-title>
        </v-list-item>

        <v-divider class="my-2"></v-divider>

        <v-list-item link color="grey-lighten-4" href="?">
          <v-list-item-title>
            Refresh
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-sheet>
  </v-col>
</template>
  
<script setup>
defineProps({
  count: {
    type: Number,
    required: false,
  }
})
</script>