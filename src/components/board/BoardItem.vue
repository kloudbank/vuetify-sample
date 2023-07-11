<script setup>
defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  userid: {
    type: String,
    required: true,
  },
  createdat: {
    type: String,
    required: true,
  },
})
</script>

<template>
  <tbody>
    <tr>
      <th>{{ id }}</th>
      <td>{{ title }}</td>
      <td>{{ userid }}</td>
      <td>{{ createdat }}</td>
    </tr>
  </tbody>
</template>
