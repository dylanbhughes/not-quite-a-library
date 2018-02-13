<template>
  <div class="list__item">
    <span>{{ todo.text }}</span>
  </div>
</template>

<script>
export default {
  name: 'TodoEventListItem',
  props: ['todo']
}
</script>

<style scoped>

.list__item {
  width: 300px;
}

</style>
