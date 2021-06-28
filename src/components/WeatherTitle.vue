<template>
  <v-container fluid class="main-wrapper">
    <v-row>
      <v-col cols="12" md="6">
        <div class="text-h2  transition-swing">{{ city }}, {{ country }}</div>
        <div class="text-h5 mt-2 transition-swing pl-1 font-weight-light">
          {{ today }}, {{ weather.weather[0].description | capitalize }}
        </div>
      </v-col>
      <v-col col="12" md="6">
        <div class="info-card pa-5 ">
          <v-row>
            <v-col>
              <p class="text-h5 font-weight-light">HIGHT</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.temp_max }}&deg; C
              </p>
            </v-col>
            <v-col>
              <p class="text-h5 font-weight-light">Feels Like</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.feels_like }}&deg; C
              </p>
            </v-col>
            <v-col>
              <p class="text-h5 font-weight-light">HIGHT</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.temp_max }}&deg; C
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col>
              <p class="text-h5 font-weight-light">MIN</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.temp_min }}&deg; C
              </p>
            </v-col>
            <v-col></v-col>
            <v-col></v-col>
          </v-row>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { DAYS, MONTHS } from "../common/constants";
  export default {
    name: "WeatherTitle",

    computed: {
      weather() {
        return this.$store.state.currentWeather;
      },
      city() {
        return this.weather.name;
      },
      country() {
        return this.weather.sys.country;
      },
      temp() {
        return `${this.weather.main.temp} &deg C`;
      },
      feelsLike() {
        return `${this.weather.main.feels_like} &deg C`;
      },

      icon() {
        return `http://openweathermap.org/img/wn/${this.weather.weather[0].icon}.png`;
      },
      today() {
        const today = new Date();

        return `${DAYS[today.getDay()]} ${today.getDate()} ${
          MONTHS[today.getMonth()]
        }`;
      },
    },
  };
</script>
<style>
  .main-wrapper {
    /* opacity: 0.5; */
    /* background-color: rgb(0, 0, 0) !important; */
    color: white;
    text-align: left;
    min-height: 30vh;
    margin: 1rem 0;
  }
  .info-card {
    background-color: rgba(255, 255, 255, 0.2);
    min-height: 20vh;
    border-radius: 10px;
  }
  .info-card .row .col {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    color: white;
    font-weight: bold;
    align-items: center;
  }
</style>
