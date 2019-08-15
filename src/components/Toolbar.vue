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
      <v-btn text v-for="(link, i) in links" :key="i" :to="link.path">{{link.title}}</v-btn>
    </v-toolbar-items>
    <v-spacer />
    <template>
      <v-btn icon>
        <v-icon>mdi-account-circle</v-icon>
      </v-btn>
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
      links: [
        { title: "Home", path: "/" },
        { title: "Brands", path: "detail" },
        { title: "About", path: "about" }
      ]
    };
  }
};
</script>