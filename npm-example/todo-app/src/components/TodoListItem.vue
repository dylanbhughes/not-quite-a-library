<template>
  <div class="list__item">
    <input type="checkbox">
    <span>{{ todo.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'TodoListItem',
  props: ['todo']
}
</script>

<style scoped>

.list__item {
  width: 300px;
}

</style>
