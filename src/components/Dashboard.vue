<template>
  <div class="container-dashboard">
    <!-- <div>fxdgfgdg</div> -->
    <div> <pre>{{carList}}</pre> </div>
  </div>

</template>

<script>
import { mapState } from "vuex";
export default {
  name: "Dashboard",
  props: {
    msg: String
  },
  computed: {
    ...mapState(["carList", "filter"]),
  },
};
</script>

<style scoped lang="scss">
.container-dashboard{
  display: grid;
 	grid-template-rows: 1fr 1fr;
	grid-auto-rows: 100px;
}
</style>
