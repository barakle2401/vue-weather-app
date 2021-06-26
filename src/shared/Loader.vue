<template>
  <v-container>
    <v-row align-content="center" justify="center">
      <v-col cols="6">
        <v-progress-linear
          color="green accent-3"
          indeterminate
          rounded
        ></v-progress-linear>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    name: "Loader",
  };
</script>
<style></style>
