<template>
  <v-app-bar flat>
    <v-container class="fill-height d-flex align-center">
      <v-avatar class="me-10 ms-4" color="grey-darken-1" size="32"></v-avatar>

      <v-btn v-for="link in links" :key="link" variant="text" :href="link.href">
        {{ link.name }}
      </v-btn>

      <v-spacer></v-spacer>

      <v-responsive max-width="260">
        <v-text-field density="compact" hide-details variant="solo"></v-text-field>
      </v-responsive>
      
      <v-btn justify="center" size="small" append-icon="mdi-account-circle" href="/logout">
        Logout
        <template v-slot:append>
        <v-icon color="warning"></v-icon>
        </template>
      </v-btn>

    </v-container>
  </v-app-bar>
</template>

<script setup>
const links = [{
  "name": "Main",
  "href": "/",
  "count": 0
}, {
  "name": "Board",
  "href": "/board",
  "count": 5
}, {
  "name": "About",
  "href": "/about",
  "count": 2
}
]
</script>
