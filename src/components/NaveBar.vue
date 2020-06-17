<template>
  <v-card>
    <v-toolbar extended>
      <v-toolbar-title>
        <img src="../assets/img/logo.svg" alt />
        <span>BACKOFFICE</span>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>notifications</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
export default {
  name: "NaveBar",
  data() {
    return {};
  },
};
</script>

<style scoped lang="scss">
header.v-sheet.v-sheet--tile.theme--light.v-toolbar.v-toolbar--extended {
  height: 77px !important;
  box-shadow: inherit;
  box-shadow: 0 1px 0 0 #e0e0e0;
  position: fixed;
  width: 100%;
  z-index: 5;
}

span {
  font-size: 10px;
  color: #a5abb7;
}
.v-toolbar__content {
  position: relative;
  top: 50px;
  padding-left: 20px;
}

.v-toolbar__title {
  position: relative;
  left: 80px;
  top: 16px;
}
</style>
