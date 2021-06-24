<template>
  <div id="app">
    <v-app>
      <SearchBar> </SearchBar>
      <Cards> </Cards>
    </v-app>
  </div>
</template>

<script>
  import SearchBar from "./components/SearchBar.vue";
  import Cards from "./components/Cards.vue";
  import store from "./modules/store";
  export default {
    name: "App",
    store,
    components: {
      SearchBar,
      Cards,
    },
    created() {},
  };
</script>

<style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    background-size: cover;
    background-color: #92b824;
    background-image: url("./assets/images/hill_green.jpg");
  }
  body {
  }
</style>
