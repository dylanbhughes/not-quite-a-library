<template>
  <div id="app">
    <div class="img-container">
      <img src="./assets/logo.png">
    </div>
    <PageComponent />
  </div>
</template>

<script>
import PageComponent from '@/components/PageComponent'
export default {
  name: 'App',
  components: { PageComponent }
}
</script>

<style lang="scss">
#app {
  color: #2c3e50;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

.img-container {
  height: 200px;
  text-align: center;
  margin: auto;
  width: 200px;

  img {
    height: 100%;
    width: 100%;
  }
}
</style>
