<template>
  <div class="nav">
    <input type="checkbox" id="nav-check" />
    <div class="nav-header">
      <div class="nav-title">
        <img src="../assets/img/logo.svg" alt="logo" />
        <span>Backoffice</span>
      </div>
    </div>
    <div class="nav-btn">
      <label for="nav-check">
        <span></span>
        <span></span>
        <span></span>
      </label>
    </div>

    <div class="nav-links">
      <input type="text" name="search" v-model="filter" />
      <button v-on:click="this.searchList">pesquisar</button>
      {{actionGetCarList}}
    </div>
  </div>
</template>

<script>
import search from "./mixins/search";
import { mapActions, mapMutations, mapState } from "vuex";

export default {
  name: "NaveBar",

  mixins: [search],

  data() {
    return {};
  },

  async created() {
    await this.actionGetCarList();
  },

  methods: {
    ...mapActions(["actionGetCarList"]),
    ...mapMutations(["setFilter"])
  },

  computed: {
    ...mapState(["carList", "filter"]),

    filter: {
      get() {
        return this.$store.state.filter;
      },
      set(val) {
        this.setFilter(val);
      }
    },

    pes: () => {
     this.searchList()
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.nav {
  background-color: #ffffff;
  position: relative;
  width: auto;
  height: 70px;
  box-shadow: 0 1px 0 0 #e0e0e0;
  display: grid;
  grid-template-columns: 5fr 18fr 5fr;

  .nav-header {
    display: inline;
  }

  .nav-header > .nav-title {
    display: inline-block;
    color: #fff;
    margin: 22px 81px;
    img {
      width: 100px;
      height: 34px;
      object-fit: contain;
    }
    span {
      width: 59px;
      height: 10px;
      font-size: 10px;
      font-weight: 500;
      line-height: 1;
      letter-spacing: normal;
      color: #a5abb7;
    }
  }

  .nav-btn {
    display: none;
  }

  .nav > .nav-links {
    display: inline;
    font-size: 18px;
  }

  .nav-links {
    display: inline-block;
    padding: 13px 10px 13px 10px;
    text-decoration: none;
    color: #efefef;
    input[type="text"] {
      background: rebeccapurple;
    }
  }

  .nav-links > a:hover {
    background-color: #ffffff;
  }

  #nav-check {
    display: none;
  }
}

button {
  background: red;
}
@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: #ffffff;
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid #eee;
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: #ffffff;

    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
</style>
