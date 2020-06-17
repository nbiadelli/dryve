<template>
  <div class="box-card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "CardBox",
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.box-card {
  border-radius: 4px;
  border: solid 1px rgba(0, 0, 0, 0.12);
  background-color: #ffffff;
}
</style>
