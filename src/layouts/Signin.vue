<template>
  <v-app>
    <v-container justify-center fill-height align-center>
      <v-layout row wrap justify-center fill-height align-center>
      <v-card class="pa-5" max-width="500" width="500">
        <v-card-actions class="justify-center">
          <v-img :src="require('@/assets/Logo1.png')" height="240" width="200" contain></v-img>
        </v-card-actions>
        <v-flex>
            <v-text-field name="username" label="username" id="username" v-model="username" app></v-text-field>
          </v-flex>
          <v-text-field
            name="password"
            label="password"
            id="password"
            type="password"
            v-model="password"
            @keyup.enter="login"
          ></v-text-field>
          <v-btn block @click="login" color="grey darken-4" class="white--text">Login</v-btn>
          <v-card-actions class="justify-center">
          <v-btn to="categories" depressed color="grey darken-2" class="ma-2 white--text" fab>
            <v-icon>mdi-home</v-icon>
          </v-btn>
          </v-card-actions>
      </v-card>
      </v-layout>
    </v-container>
  </v-app>
</template>
<script>
export default {
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      if (this.username === 'admin' && this.password === 'pass') {
        alert('Login correct')
        this.$router.push('/warehouse')
      } else {
        alert('Login Fail')
      }
    }
  }
}
</script>
