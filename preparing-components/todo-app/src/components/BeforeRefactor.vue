<template>
  <div class="hello">
    <TodoList :todos="getAllTodos" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TodoList from '@/components/TodoList'

export default {
  name: 'BeforeRefactor',
  components: { TodoList },
  computed: {
    ...mapGetters(['getAllTodos'])
  },
  data () {
    return {
      searched: false
    }
  },
  methods: {
    handleChoosingTodos () {
      if(searched) {
        return this.passAlongSearchedTodos()
      } else {
        return this.getAllTodos
      }
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
