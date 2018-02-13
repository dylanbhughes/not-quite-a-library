<template>
  <div class="search-bar">
    <input type="text"
           class="search-bar__input"
           v-model="searchTerm"
           placeholder="Search"
           v-on:keyup.enter="handleSearch(searchTerm)">
  </div>
</template>

<script>
export default {
  name: 'SearchBar',
  props: ['handleSearch'],
  data () {
    return {
      searchTerm: ''
    }
  }
}
</script>

<style scoped>

.search-bar {
  width: 300px;
}

</style>
