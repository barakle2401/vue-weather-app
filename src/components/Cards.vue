<template>
  <v-container>
    <v-row class="justify-center">
      <CityCard></CityCard>
    </v-row>
  </v-container>
</template>
<script>
  import CityCard from "./CityCard.vue";
  export default {
    name: "Cards",
    components: {
      CityCard,
    },
  };
</script>
<style scoped></style>
