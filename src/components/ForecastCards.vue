<template>
  <v-container>
    <WeatherTitle></WeatherTitle>
    <v-row class="justify-center">
      <CityWeatherCard
        v-for="(item, i) in forecast"
        :data="item"
        :key="i"
      ></CityWeatherCard>
    </v-row>
  </v-container>
</template>
<script>
  import WeatherTitle from "./WeatherTitle.vue";
  import CityWeatherCard from "./CityWeatherCard.vue";
  export default {
    name: "Cards",

    components: {
      CityWeatherCard,
      WeatherTitle,
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
