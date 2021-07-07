<template>
  <v-col cols="6" md="3">
    <div class="mx-auto weather-card ">
      <v-list-item two-line>
        <v-list-item-content class="text-left  white--text">
          <v-list-item-title class="text-h5  font-weight-light">
            {{ date[0] }}
          </v-list-item-title>
          <v-list-item-title class="text-h6 font-weight-light">
            {{ date[1] }}
          </v-list-item-title>
          <v-list-item-subtitle class="text-h6 font-weight-light white--text">{{
            weatherDescription
          }}</v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>

      <div class="d-flex align-center pl-4">
        <div class="text-h6">{{ temp }} &deg;C</div>
        <div>
          <v-img :src="icon" alt="Sunny image" width="60"></v-img>
        </div>
      </div>

      <div class="d-flex pl-4  accent-2">
        <span class="mr-2 text--light-green">Feels Like</span>
        <span>25 &deg; C</span>
      </div>
    </div>
  </v-col>
</template>
<script>
  export default {
    name: "CityWeatherCard",
    props: ["data"],
    data() {
      return {};
    },
    computed: {
      date() {
        const options = {
          weekday: "long",

          month: "long",
          day: "numeric",
        };
        const date = new Date(this.data.dt_txt);
        const time = date.getHours() + ":00";
        return [date.toLocaleDateString("en-US", options), time];
      },

      weatherDescription() {
        return this.data.weather[0].description;
      },
      temp() {
        return `${parseInt(this.data.main.temp)}`;
      },
      icon() {
        return `http://openweathermap.org/img/wn/${this.data.weather[0].icon}.png`;
      },
    },
    created() {},
  };
</script>
<style scoped>
  .weather-card {
    background-color: rgba(46, 43, 43, 0.233);
    border: 1px solid rgba(240, 240, 240, 0.281);
    box-shadow: 2px 2px 2px rgba(231, 141, 38, 0.233);
    border-radius: 10px;
    color: whitesmoke;
  }
</style>
