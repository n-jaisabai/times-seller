<template>
  <v-app>
    <v-card flat>
      <v-navigation-drawer v-model="drawer" :mini-variant.sync="mini" app>
        <v-list-item>
          <v-list-item-avatar class="grey darken-2">
            <v-img src="../assets/Wacthlogo.png"></v-img>
          </v-list-item-avatar>
          <v-list-item-title class="subtitle">WAREHOUSE</v-list-item-title>
          <v-btn icon @click.stop="mini = !mini">
            <v-icon>mdi-chevron-left</v-icon>
          </v-btn>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense>
          <v-list-item v-for="item in items" :key="item.title" :to="item.link">
            <v-list-item-icon>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-content class="grey lighten-5 flat">
        <router-view />
      </v-content>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Home', icon: 'mdi-home-city', link: '/warehouse/home' },
        { title: 'Products', icon: 'mdi-shopify', link: '/warehouse/products' },
        { title: 'Users', icon: 'mdi-account-group-outline', link: '/warehouse/users' }
      ],
      mini: true
    }
  }
}
</script>
