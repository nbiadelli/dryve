<template>
  <div class="side-bar">
    <v-navigation-drawer
      v-model="drawer"
      :expand-on-hover="expandOnHover"
      :mini-variant="miniVariant"
      :right="right"
      :permanent="permanent"
      
      absolute
    >
      <v-list>
        <v-list-item two-line class="px-2">
          <v-list-item-avatar>
            <img src="https://randomuser.me/api/portraits/men/81.jpg" />
          </v-list-item-avatar>

          <v-list-item-content>
            <v-list-item-title>Vinicius Malara</v-list-item-title>
            <v-list-item-subtitle>Subtext</v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  data() {
    return {
      drawer: true,

      items: [
        { title: "Início", icon: "mdi-home" },
        { title: "Clientes", icon: "mdi-account" },
        { title: "Veículos", icon: "mdi-car" },
        { title: "Triangulação", icon: "mdi-vector-triangle" },
        { title: "Financeiro", icon: "mdi-wallet" }
      ],
      right: false,
      permanent: true,
      miniVariant: true,
      expandOnHover: true,
      background: false
    };
  },

};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  lang="scss">
.side-bar {
  .v-list--dense .v-list-item .v-list-item__subtitle,
  .v-list--dense .v-list-item .v-list-item__title,
  .v-list-item--dense .v-list-item__subtitle,
  .v-list-item--dense .v-list-item__title {
  font-family: Inter-Regular_;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.87);
  }

  .v-avatar.v-list-item__avatar {
    height: 50px;
    min-width: 40px;
    width: 50px;
    }
}
</style>
