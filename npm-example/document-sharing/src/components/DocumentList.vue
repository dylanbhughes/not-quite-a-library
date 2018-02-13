<template>
  <div class="list__wrapper">
    <div class="search-bar__wrapper">
      <SearchBar :handleSearch="search" />
    </div>
    <div class="list">
      <DocumentListItem v-for="todo in searchedTodos"
      :todo="todo"
      :key="todo.id"/>
    </div>
  </div>
</template>

<script>
import SearchBar from '@generic-product-company-in/search-bar'
import DocumentListItem from '@/components/DocumentListItem'

export default {
  name: 'DocumentList',
  components: { SearchBar, DocumentListItem },
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
