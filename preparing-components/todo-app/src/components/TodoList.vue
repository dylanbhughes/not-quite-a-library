<template>
  <ul>
    <TodoListItem v-for="(todo, index) in todos"
                  :todo="todo"
                  :key="todo.id"/>
  </ul>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  components: { TodoListItem },
  props: ['todos']
}
</script>

<style scoped>

</style>
