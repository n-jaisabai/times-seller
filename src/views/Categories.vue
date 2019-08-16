<template>
  <v-container class="grey lighten-5">
    <v-layout row>
      <v-row no-gutters>
        <v-col
          cols="8"
          sm="3"
          flat
          v-for="(product, index) in products"
          :key="index"
          class="pa-2"
          @click="gotoShowDetail(product.product_id)"
        >
          <v-card flat class="fill-height pa-5">
            <v-img :src="product.links[0]" contain height="200"></v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1 text-center">{{product.brand}}</v-list-item-title>
                <v-list-item-subtitle class="text-center">{{product.model}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
                <v-list-item-title class="title mb-1 text-center orange--text text--lighten-1" color="">ราคา {{product.price}} บาท</v-list-item-title>
            </v-list-item>
          </v-card>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      products: []
    };
  },
  methods: {
    async getData() {
      try {
        var { data } = await this.axios.get(
          "http://127.0.0.1:5000/api/1.0/products"
        );
        var product = [];
        for (let i = 0; i < data.length; i++) {
          let x = Object.values(data[i])[0];
          x["product_id"] = Object.keys(data[i])[0];
          product.push(Object.values(data[i])[0]);
        }
        console.log(product[0].links[0]);
        this.products = product;
      } catch (error) {
        console.log(error.message);
      }
    },
    gotoShowDetail(id) {
      this.$router.push("categories/" + id);
    },
    clickTest(index) {
      alert("WORK!" + index);
    }
  }
};
</script>
