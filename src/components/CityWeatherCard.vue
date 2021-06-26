<template>
  <v-col cols="12" md="3">
    <v-card class="mx-auto">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h6">
            {{ date[0] }}
          </v-list-item-title>
          <v-list-item-title class="text-h7">
            {{ date[1] }}
          </v-list-item-title>
          <v-list-item-subtitle>{{ weatherDescription }}</v-list-item-subtitle>
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
    </v-card>
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
<style scoped></style>
