<template>
  <v-row class="justify-center">
    <CityWeatherCard
      v-for="(item, i) in forecast"
      :data="item"
      :key="i"
    ></CityWeatherCard>
  </v-row>
</template>
<script>
  import CityWeatherCard from "./CityWeatherCard.vue";
  export default {
    name: "Cards",

    components: {
      CityWeatherCard,
    },
    computed: {
      forecast() {
        return this.$store.getters.forecast;
      },
      wethear() {
        return this.$store.state.wethear;
      },
    },
  };
</script>
<style scoped></style>
