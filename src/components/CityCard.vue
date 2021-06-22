<template>
  <v-col cols="12" md="">
    <v-card class="mx-auto" max-width="400">
      <v-list-item two-line>
        <v-list-item-content>
          <v-list-item-title class="text-h5">
            San Francisco
          </v-list-item-title>
          <v-list-item-subtitle
            >Mon, 12:30 PM, Mostly sunny</v-list-item-subtitle
          >
        </v-list-item-content>
      </v-list-item>

      <v-card-text>
        <v-row align="center">
          <v-col class="text-h2" cols="6">
            23&deg;C
          </v-col>
          <v-col cols="6">
            <v-img
              src="https://cdn.vuetifyjs.com/images/cards/sun.png"
              alt="Sunny image"
              width="92"
            ></v-img>
          </v-col>
        </v-row>
      </v-card-text>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-send</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle>{23 km/h}</v-list-item-subtitle>
      </v-list-item>

      <v-list-item>
        <v-list-item-icon>
          <v-icon>mdi-cloud-download</v-icon>
        </v-list-item-icon>
        <v-list-item-subtitle></v-list-item-subtitle>
      </v-list-item>

      <v-divider></v-divider>
      <v-card-actions>
        <v-list-item class="grow">
          <v-row align="center" justify="end">
            <v-icon class="mr-1">
              mdi-heart
            </v-icon>
          </v-row>
        </v-list-item>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
  export default {
    name: "CityCard",
    data() {
      return {};
    },
    computed: {
      text() {
        return this.$store.state.text;
      },
    },
    created() {},
  };
</script>
<style scoped></style>
