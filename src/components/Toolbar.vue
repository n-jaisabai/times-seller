<template>
  <v-app-bar app flat>
    <v-toolbar-side-icon class="hidden-md-and-up" @click="toggleDrawer" />
    <v-img
      :src="require('@/assets/Logo1.png')"
      mr-5
      contain
      height="64"
      width="128"
      max-width="128"
      @click="$vuetify.goTo(0)"
    />
    <v-toolbar-items>
      <v-btn text to="/">home</v-btn>
      <v-menu offset-y open-on-hover="true" transition="slide-y-transition">
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">Brands</v-btn>
        </template>
        <v-list>
          <v-list-item v-for="(item, index) in items" :key="index" :to="item.path">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
      <v-btn text to="/about">ABOUT</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <template>
      <v-menu offset-y transition="slide-y-transition" close-on-click="true">
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on">
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </template>

        <v-card class="pa-3 text-center">
            <v-btn width="200" color="white" flat>Sign in</v-btn>
            <p style="font-size: 12px; margin-bottom: 0; margin-top: 2px">New customer? <router-link to="/register">Start here</router-link>.</p>
        </v-card>
      </v-menu>
      <v-btn icon>
        <v-icon>mdi-shopping</v-icon>
      </v-btn>
    </template>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        { title: "SEIKO", path: "/categories/seiko" },
        { title: "Brands", path: "/categories/detail" },
        { title: "About", path: "/categories/about" }
      ],
      account: 1,
      accounts: [
        { text: "Real-Time", icon: "mdi-clock" },
        { text: "Audience", icon: "mdi-account" },
        { text: "Conversions", icon: "mdi-flag" }
      ]
    };
  }
};
</script>