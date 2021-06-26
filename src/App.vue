<template>
  <div id="app">
    <v-app>
      <!-- <ToolBar></ToolBar> -->
      <SearchBar> </SearchBar>
      <Loader v-if="appLoading"></Loader>
      <Cards> </Cards>
    </v-app>
  </div>
</template>

<script>
  import SearchBar from "./components/SearchBar.vue";
  import Cards from "./components/ForecastCards.vue";
  import Loader from "./shared/Loader.vue";
  import store from "./modules/store";
  // import ToolBar from "./shared/ToolBar.vue";
  export default {
    name: "App",
    store,
    components: {
      // ToolBar,
      SearchBar,
      Cards,
      Loader,
    },
    computed: {
      appLoading() {
        return store.state.loading;
      },
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
