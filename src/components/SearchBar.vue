<template>
  <div>
    <v-container id="searchBarWrapper">
      <v-row class="justify-center align-center">
        <v-col cols="12" sm="8" md="6">
          <v-expand-transition>
            <v-text-field
              v-model="searchValue"
              @keyup="handleSubmit"
              label="Search"
              placeholder="Seach for weather"
              filled
              rounded
              dense
            ></v-text-field>
          </v-expand-transition>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: "SearchBar",
    data() {
      return {};
    },
    computed: {
      searchValue: {
        get() {
          return this.$store.state.searchValue;
        },
        set(newVal) {
          this.$store.dispatch("setSearchValue", newVal);
        },
      },
    },
    methods: {
      handleSubmit(e) {
        if (e.keyCode === 13) {
          const searchValue = this.searchValue;
          if (searchValue.length === 0) return;
          this.$store.dispatch("submitSearch", searchValue);
        }
      },
    },
  };
</script>
<style>
  #searchBarWrapper {
    min-height: 40vh;
    padding: 2rem;

    background-color: transparent;
    display: flex;

    align-items: center;
  }
</style>
