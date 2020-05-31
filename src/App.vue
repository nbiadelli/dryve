<template>
  <div id="app">
    <div id="nav">
      <SideBar />
      <NaveBar />
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>-->
    </div>
    <router-view />
  </div>
</template>

<script>
// @ is an alias to /src
import SideBar from "./components/SideBar.vue";
import NaveBar from "./components/NaveBar.vue"


export default {
  components: {
    SideBar,
    NaveBar
  },
};
</script>

<style lang="scss">
#app {
  font-family: Inter-Regular_;
  text-align: center;

}

#nav {
  font-size: 14px;
}
</style>
