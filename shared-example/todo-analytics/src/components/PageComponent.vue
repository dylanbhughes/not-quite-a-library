<template>
  <div class="wrapper">
    <TodoEventList :todos="todos" />
  </div>
</template>

<script>
import todoData from '@/data'
import TodoEventList from '@/components/TodoEventList'

export default {
  name: 'PageComponent',
  components: { TodoEventList },
  data () {
    return {
      todos: todoData
    }
  }
}
</script>

<style>
  .wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 1em;
  }
</style>
