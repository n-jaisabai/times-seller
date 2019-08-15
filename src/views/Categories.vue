<template>
  <v-container class="grey lighten-5">
    <v-layout row>
      <v-row no-gutters>
        <v-col cols="8" sm="3" flat v-for="(product, index) in products" :key="index" class="pa-2" @click="gotoShowDetail(product.product_id)">
          <v-card flat>
            <v-img :src="product.links[0]" contain height="200"></v-img>
            <v-card-text>
              <p class="text--primary text-center">SEIKO</p>
              <p class="text--primary text-center">ราคา 27,000 บาท</p>
            </v-card-text>
            <v-layout row align-center justify-center fill-height>
              <v-btn outlined @click.native="clickTest()">ซื้อ</v-btn>
            </v-layout>
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
        var { data } = await this.axios.get("http://127.0.0.1:5000/api/1.0/products");
        var product = []
        for (let i=0;i < data.length; i++) {
            let x = Object.values(data[i])[0]
            x['product_id'] = Object.keys(data[i])[0]
            product.push(Object.values(data[i])[0])
        }
        console.log(product[0].links[0]);
        this.products = product;
      } catch (error) {
        console.log(error.message);
      }
    },
    gotoShowDetail(id) {
        this.$router.push('categories/' + id)
    },
    clickTest(index) {
      alert("WORK!" +index);
    }
  }
};
</script>
