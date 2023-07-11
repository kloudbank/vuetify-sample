<template>
  <v-main class="bg-grey-lighten-3">
    <v-container>
      <v-row>
        <ConstrainedSidebar :count="count" />
        <v-col>
          <v-sheet min-height="70vh" rounded="lg">
            <BoardList />
          </v-sheet>
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>
  
<script setup>
import ConstrainedSidebar from './ConstrainedSidebar.vue';
import BoardList from './board/BoardList.vue';

defineProps({
  count: {
    type: Number,
    required: false,
  }
})
</script>