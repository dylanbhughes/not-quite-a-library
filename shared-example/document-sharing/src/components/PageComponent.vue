<template>
  <div class="wrapper">
    <DocumentList :todos="todos" />
  </div>
</template>

<script>
import todoData from '@/data'
import DocumentList from '@/components/DocumentList'

export default {
  name: 'PageComponent',
  components: { DocumentList },
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
