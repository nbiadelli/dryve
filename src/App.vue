<template>
  <div id="app">
    <div id="nav">
      <SideBar />
      <NaveBar />
      <router-view />
    </div>
  </div>
</template>

<script>
import SideBar from "./components/SideBar.vue";
import NaveBar from "./components/NaveBar.vue";

export default {
  components: {
    SideBar,
    NaveBar,
  },
};
</script>

<style lang="scss">
body {
  background-color: #f3f4f6;
  height: auto;
  
}
#app {
  font-family: Inter-Regular_;
  text-align: center;
}

#nav {
  font-size: 14px;
}

.box{
  padding-top: 73px;
}
</style>
