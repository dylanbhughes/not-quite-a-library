<template>
  <li>
    <input type="checkbox" v-model="done">
    <span>{{ todo.text }}</span>
  </li>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo']
}
</script>

<style scoped>

</style>
