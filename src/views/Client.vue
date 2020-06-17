<template>
  <div class="box-client">
    <ListClient />
  </div>
</template>

<script>
import ListClient from "../components/ListClient.vue";

export default {
  name: "Client",
  components: {
    ListClient,
  },
};
</script>

<style lang="scss">
.box-client {
  width: 90%;
  height: 760px;
  padding-left: 60px;
  margin: 0 auto;
  height: calc(100vh - 100px);
  @media screen and (min-width: 0px) and (max-width: 950px) {
    width: 100%;
    padding-left: 0px;
  }
}
</style>
