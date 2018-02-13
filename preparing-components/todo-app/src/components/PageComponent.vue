<template>
  <div class="wrapper">
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import todoData from '@/data'
import TodoList from '@/components/TodoList'

export default {
  name: 'PageComponent',
  components: { TodoList },
  data () {
    return {
      todos: todoData
    }
  }
}
</script>

<style lang="scss" scoped>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
  }
</style>
