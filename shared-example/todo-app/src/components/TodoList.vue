<template>
  <div class="list__wrapper">
    <div class="search-bar__wrapper">
      <SearchBar :handleSearch="search" />
    </div>
    <div class="list">
      <TodoListItem v-for="todo in searchedTodos"
      :todo="todo"
      :key="todo.id"/>
    </div>
  </div>
</template>

<script>
import TodoListItem from '@/components/TodoListItem'

export default {
  name: 'TodoList',
  // glbobal components { SearchBar }
  components: { TodoListItem },
  props: ['todos'],
  data () {
    return {
      searchedTodos: this.todos
    }
  },
  methods: {
    search (searchTerm) {
      if (!searchTerm) {
        this.searchedTodos = this.todos
      }
      this.searchedTodos = this.todos.filter(todo => {
        return todo.text.includes(searchTerm)
      })
    }
  }
}
</script>

<style scoped>

.list {
  align-items: baseline;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.list__wrapper {
  margin: auto;
}

</style>
