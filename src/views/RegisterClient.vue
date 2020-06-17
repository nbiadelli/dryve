<template>
  <div class="box-client">
    <Form />
  </div>
</template>

<script>
import Form from "../components/Form.vue";

export default {
  name: "registerClient",
  components: {
    Form,
  },
};
</script>

<style scoped lang="scss">
.box-client {
  padding-left: 60px;
}
</style>
