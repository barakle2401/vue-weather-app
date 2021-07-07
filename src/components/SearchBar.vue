<template>
  <v-container id="searchBarWrapper">
    <v-row class="justify-center align-center p-0">
      <v-col cols="12" sm="8" md="6">
        <v-text-field
          v-model="city"
          @keyup="handleSubmit"
          label="Search"
          placeholder="Enter a city"
          filled
          rounded
          dense
          class="search-input"
        ></v-text-field>

        <v-slide-y-transition>
          <v-card-text class=" white--text text-h5" v-show="displayError">
            Please provide city name
          </v-card-text>
        </v-slide-y-transition>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  import { mapActions, mapGetters } from "vuex";
  export default {
    name: "SearchBar",
    data() {
      return {
        displayError: false,
      };
    },
    computed: {
      ...mapGetters(["searchValue"]),
      city: {
        get() {
          return this.searchValue;
        },
        set(newVal) {
          this.displayError = false;
          this.setSearchValue(newVal);
        },
      },
    },

    methods: {
      handleSubmit(e) {
        if (e.keyCode === 13) {
          if (!this.city || this.city.length === 0) {
            this.displayError = true;
            return;
          }

          this.submitSearch(this.city);
        }
      },
      ...mapActions(["setSearchValue", "submitSearch"]),
    },
  };
</script>
<style>
  #searchBarWrapper {
    margin-top: 10vh;
    background-color: transparent;
    display: flex;
    align-items: center;
  }
  .v-input__slot {
    background-color: rgba(255, 255, 255, 0.651) !important;
    font-size: 1.2rem !important;
  }
</style>
