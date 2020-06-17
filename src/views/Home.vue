<template>
  <div class="home">
    <Dashboard />
  </div>
</template>

<script>
// @ is an alias to /src
import Dashboard from "../components/Dashboard.vue";
import { mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Dashboard,
  },

  async created() {
    await this.actionGetCarList();
  },

  methods: {
    ...mapActions(["actionGetCarList"]),
  },
};
</script>

<style scoped lang="scss">
.home {
  height: calc(100vh - 100px);
  @media screen and (min-width: 0px) and (max-width: 1366px) {
    height: 100%;
  }
}
</style>
