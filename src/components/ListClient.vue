<template>
  <div class="box-listClient">
    <form>
      <div class="list-filter">
        <div>
          <v-text-field
            v-model="filter"
            label="Buscar por nome..."
            :append-icon="`mdi-magnify`"
            outlined
            type="search"
          ></v-text-field>
        </div>
        <div>
          <router-link to="/register-client">
            <v-btn class="ma-2 white--text">
              <v-icon right>add</v-icon>Adicionar
            </v-btn>
          </router-link>
        </div>
      </div>
    </form>
    <div>
      <v-data-table :headers="headers" :items="serch" class="elevation-1">
        <template v-slot:item.status="{ item }">
          <v-chip :color="getColor(item.status)">{{ item.status }}</v-chip>
        </template>
      </v-data-table>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "ListClient",
  data() {
    return {
      filter: "",
      color: "#f3f7ff",
      headers: [
        {
          text: "NAME",
          align: "start",
          sortable: false,
          value: "name",
        },
        { text: "STATUS", value: "status" },
        { text: "TELEFONE", value: "fone" },
        { text: "E-MAIL", value: "email" },
      ],
    };
  },

  computed: {
    ...mapState(["registerCliente"]),
    serch() {
      const searchList = this.registerCliente.filter(x =>
        x.name.match(RegExp(this.filter, "gi"))
      );
      return searchList;
    },
  },

  methods: {
    getColor() {
      return this.color;
    },
  },
};
</script>
<style lang="scss">
.v-data-footer.v-data-footer__select {
  display: none !important;
}
.box-listClient {
  padding-top: 73px;
  @media screen and (min-width: 0px) and (max-width: 950px) {
    padding: 73px 10px 0px 68px;
  }
}

.list-filter {
  display: grid;
  grid-template-columns: 1.5fr 0.5fr;
  height: 108px;
  padding-top: 31px;
  @media screen and (min-width: 0px) and (max-width: 1366px) {
    grid-template-columns: repeat(auto-fit, minmax(267px, 2fr));
    height: 150px;
  }
  button.ma-2.white--text.v-btn.v-btn--contained.theme--light.v-size--default {
    background-color: #6200ee;
    color: #fff;
    line-height: 1;
    letter-spacing: normal;
    padding-top: 6px;
    @media screen and (min-width: 0px) and (max-width: 605px) {
      position: relative;
      bottom: 15px;
    }
  }
}
.text-start {
  .v-chip:before {
    color: #0065ff !important;
  }
}
.v-icon.v-icon {
  right: 10px;
  position: relative;
  top: -2px !important;
  right: 5px;
}

.v-data-footer__select {
  display: none;
}
.v-text-field.v-text-field--enclosed .v-text-field__details,
.v-text-field.v-text-field--enclosed:not(.v-text-field--rounded)
  > .v-input__control
  > .v-input__slot {
  padding: 0 12px;
  width: 372px;
  @media screen and (min-width: 0px) and (max-width: 900px) {
    width: auto;
  }
}
</style>
