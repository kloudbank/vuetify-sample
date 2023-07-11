<script setup>
import BoardItem from './BoardItem.vue'
</script>

<script>
export default {
  data() {
    return {
      connectData: "",
    };
  },
  methods: {
    get() {
      this.axios.get("/v1/board/all").then((response) => {
        this.connectData = response.data;
      });
    },
  },
  mounted() {
    this.get();
  },
}
</script>

<template>
  <div class="text-h2">Board</div>
  <p>From FastAPI</p>
  <v-table class="table">
    <thead>
      <tr>
        <th>#</th>
        <th>Title</th>
        <th>User ID</th>
        <th>Created At</th>
      </tr>
    </thead>
    <!-- eslint-disable-next-line vue/valid-v-for -->
    <BoardItem v-for="item in connectData" :id="item.id" :title="item.title" :userid="item.userid"
      :createdat="item.createdat" />
  </v-table>
</template>
