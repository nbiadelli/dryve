<template>
  <div class="box-register box">
    <div class="title-register">
      <h1>Adicionar cliente</h1>
    </div>
    <card-box>
      <v-form ref="form" v-model="valid" lazy-validation>
        <div class="box-form">
          <div class="grid-duo">
            <v-text-field
              v-model="listRegister.name"
              :counter="10"
              :rules="nameRules"
              label="Nome"
              required
              autofocus
            ></v-text-field>
            <v-text-field
              v-model="listRegister.lastName"
              label="Sobrenome"
            ></v-text-field>
          </div>
          <v-text-field
            v-model="listRegister.email"
            label="E-mail"
            :rules="emailRules"
            required
          ></v-text-field>
          <div class="grid-duo">
            <v-text-field
              v-model="listRegister.fone"
              label="Telefone"
              :rules="foneRules"
              required
            ></v-text-field>
          </div>
          <div class="grid-duo">
            <v-text-field v-model="listRegister.cep" label="CEP"></v-text-field>
          </div>
          <v-text-field
            v-model="listRegister.address"
            label="Endereço"
          ></v-text-field>
          <div class="grid-duo">
            <v-text-field
              v-model="listRegister.number"
              label="Número"
            ></v-text-field>
            <v-text-field
              v-model="listRegister.complement"
              label="Complenento"
            ></v-text-field>
          </div>
          <v-text-field
            v-model="listRegister.district"
            label="Bairro"
          ></v-text-field>
          <div class="grid-duo">
            <v-text-field
              v-model="listRegister.city"
              label="Cidade"
            ></v-text-field>
            <v-text-field
              v-model="listRegister.states"
              label="Estado"
            ></v-text-field>
          </div>
        </div>
        <div class="grid-duo">
          <v-btn
            class="mr-4 btn-save"
            :disabled="!valid"
            @click="addRegister(listRegister)"
            >SALVAR</v-btn
          >

          <v-btn class="btn-clear" @click="clear">CANCELAR</v-btn>
        </div>
      </v-form>
    </card-box>
  </div>
</template>

<script>
import CardBox from "../components/CardBox.vue";
import { mapActions, mapMutations } from "vuex";

export default {
  name: "Form",
  components: {
    CardBox,
  },

  data: () => ({
    valid: true,
    nameRules: [
      v => !!v || "Nome é obrigatório",
      v => (v && v.length <= 10) || "O nome deve ter menos de 10 caracteres",
    ],
    emailRules: [
      v => !!v || "E-mail é obrigatório",
      v => /.+@.+\..+/.test(v) || "E-mail deve ser válido",
    ],
    foneRules: [
      v => !!v || "Telefone é obrigatório",
      v =>
        /\d{4,5}-\d{4}/.test(v) || "Telefone deve ser neste formato 99999-999",
    ],
    listRegister: { loading: false, status: "cliente", checkbox: false },
    localStorage: [],
  }),

  methods: {
    ...mapActions(["addRegister"]),
    ...mapMutations(["setClient"]),

    async addRegister(listRegister) {
      this.$refs.form.validate();
      await this.setClient(listRegister);
      this.$router.push("client");
    },

    clear() {
      this.$refs.form.reset();
      this.$refs.form.resetValidation();
    },
  },
};
</script>

<style lang="scss">
.box-register {
  width: 1200px;
  @media screen and (min-width: 0px) and (max-width: 950px) {
    width: 100%;
  }

  .box-form {
    width: 545px;
    height: 100%;
    @media screen and (min-width: 376px) and (max-width: 767px) {
      width: 260px;
      margin: 0 auto;
    }
    @media screen and (min-width: 0) and (max-width: 375px) {
      width: 120px;
    }
  }
  .title-register {
    text-align: left;
    margin: 18px 0px 5px 0px;
    font-weight: 500;
    line-height: 1.2;
    letter-spacing: 0.15px;
    h1 {
      font-size: 20px;
    }
  }
  .grid-duo {
    display: grid;
    grid-template-columns: 0.3fr 1fr;
    grid-gap: 20px;
    @media screen and (min-width: 0px) and (max-width: 950px) {
      grid-template-columns: repeat(auto-fit, minmax(267px, 2fr));
    }
    > div {
      width: 262px;
    }
    button.mr-4.btn-save.v-btn.v-btn--contained.theme--light.v-size--default {
      background-color: #6200ee;
      color: #ffff;
      width: 150px;
    }
    button.btn-clear.v-btn.v-btn--contained.theme--light.v-size--default {
      background-color: #ffff;
      color: #6200ee;
      width: 150px;
    }
  }
  .box-card {
    padding: 20px;
    height: 100%;
    margin-bottom: 20px;
    @media screen and (min-width: 0px) and (max-width: 950px) {
      padding: 5px;
      width: 100%;
    }
  }
  margin: 0 auto;

  .v-text-field input {
    line-height: 20px;
    padding: 8px 0;
    min-width: 0;
    width: 100%;
    border-radius: 4px;
    border: 1px solid rgba(0, 0, 0, 0.6);
    border-bottom: none;
    width: 262px;
    height: 56px;
    max-height: 56px;
    padding: 10px 0px 0px 10px !important;
  }
  .v-text-field .v-label {
    max-width: 90%;
    overflow: hidden;
    text-overflow: ellipsis;
    top: 22px;
    white-space: nowrap;
    pointer-events: none;
    margin-left: 10px;
  }
  .v-messages__wrapper {
    color: red;
  }
}
</style>
