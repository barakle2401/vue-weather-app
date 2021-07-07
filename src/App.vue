<template>
  <div id="app">
    <v-app>
      <!-- <ToolBar></ToolBar> -->
      <SearchBar> </SearchBar>
      <Loader v-if="appLoading"></Loader>

      <v-container v-if="dataFetched">
        <transition name="slide-fade">
          <WeatherTitle></WeatherTitle>
        </transition>
        <Cards> </Cards>
      </v-container>
    </v-app>
  </div>
</template>

<script>
  import SearchBar from "./components/SearchBar.vue";
  import WeatherTitle from "./components/WeatherTitle.vue";
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
      WeatherTitle,
      Cards,
      Loader,
    },
    computed: {
      appLoading() {
        return store.state.loading;
      },
      dataFetched() {
        return store.state.dataExist;
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
    background-color: #b84e2400;
    background-image: url("./assets/images/backgrounds/sunset1.jpg");
    background-position: 50%;
    height: 100%;
    width: 100%;
  }
  .slide-fade-enter-active {
    transition: all 0.3s ease;
  }
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
    transform: translateX(10px);
    opacity: 0;
  }
</style>
