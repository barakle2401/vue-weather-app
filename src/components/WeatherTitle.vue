<template>
  <v-container fluid class="main-wrapper">
    <v-row>
      <v-col cols="12" md="6" class="d-flex">
        <div class="d-flex flex-column mr-12">
          <div class="text-h2  ">{{ city }}, {{ country }}</div>
          <div class="text-h5 mt-2  pl-1 font-weight-light">
            {{ today }}, {{ weatherDescription | capitalize }}
          </div>
        </div>
        <div>
          <v-img :src="icon" width="100" alt=""> </v-img>
        </div>
      </v-col>

      <v-col col="12" md="6">
        <div class="info-card pa-5 text-center">
          <v-row>
            <v-col cols="6" md="4">
              <p class="text-h5 font-weight-light">HIGHT</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.temp_max }}&deg; C
              </p>
            </v-col>
            <v-col cols="6" md="4">
              <p class="text-h5 font-weight-light">Feels Like</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.feels_like }}&deg; C
              </p>
            </v-col>
            <v-col cols="6" md="4">
              <p class="text-h5 font-weight-light">HIGHT</p>
              <p class=" text-h4 font-weight-light">
                {{ weather.main.temp_max }}&deg; C
              </p>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6" md="4">
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
      weatherDescription() {
        return this.weather.weather[0].description;
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
        const icon = this.weather.weather[0].main;
        //         if (main === 'Thunderstorm') {
        //   weatherIcon = <FontAwesomeIcon icon={faBolt} />;
        // } else if (main === 'Drizzle') {
        //   weatherIcon = <FontAwesomeIcon icon={faCloudRain} />;
        // } else if (main === 'Rain') {
        //   weatherIcon = <FontAwesomeIcon icon={faCloudShowersHeavy} />;
        // } else if (main === 'Snow') {
        //   weatherIcon = <FontAwesomeIcon icon={faSnowflake} />;
        // } else if (main === 'Clear') {
        //   weatherIcon = <FontAwesomeIcon icon={faSun} />;
        // } else if (main === 'Clouds') {
        //   weatherIcon = <FontAwesomeIcon icon={faCloud} />;
        // } else {
        //   weatherIcon = <FontAwesomeIcon icon={faSmog} />;
        // }
        return require(`../assets/images/icons/${icon}.png`);
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
    background-color: rgba(46, 43, 43, 0.267);
    border: 1px solid rgba(240, 240, 240, 0.281);
    box-shadow: 2px 2px 2px rgba(231, 141, 38, 0.233);
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
