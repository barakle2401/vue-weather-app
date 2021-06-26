<template>
  <div>
    <v-toolbar flat>
      <v-switch v-model="$vuetify.theme.dark" inset persistent-hint></v-switch>
    </v-toolbar>
  </div>
</template>
<script>
  export default {
    name: "ToolBar",
  };
</script>
<style></style>
