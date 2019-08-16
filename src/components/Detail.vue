<template>
  <v-container class="white pa-5" justify-center>
    <v-layout row wrap justify-center fill-height align-center>
      <v-flex xs12 md6>
        <v-img :src="product.links[0]" contain height="400px"></v-img>
      </v-flex>
      <v-flex xs12 md6>
        <p class="display-1 text--primary">{{product.brand}}</p>
        <div class="text--primary">{{product.model}}</div>
        <br />
        <p class="display-1 text--primary">ราคา {{product.price}} บาท</p>
        <v-btn outlined width="200" height="50">ซื้อ</v-btn>
      </v-flex>
      <v-flex xs12 md12 pa-5>
        <p class="font-weight-black">รายละเอียดสินค้า</p>
        <p class="font-weight-regular">{{product.description}}</p>
      </v-flex>
    </v-layout>
    <!-- <v-row class="pa-5">
      <v-row no-gutters>
        <v-col cols="8" sm="6">
          <v-card flat>
            <v-img :src="product.links[0]" contain height="400px"></v-img>
          </v-card>
        </v-col>
        <v-col cols="4" sm="6">
          <v-card flat height="400">
            <v-card-text>
              <p class="display-1 text--primary">{{product.brand}}</p>
              <div class="text--primary">
                {{product.model}}
              </div>
              <p class="display-1 text--primary">ราคา {{product.price}} บาท</p>
            </v-card-text>
            <v-btn outlined width="200" height="50">ซื้อ</v-btn>
          </v-card>
        </v-col>
        <v-col cols="12" sm="12">
          <v-card flat>
            <v-card-text>
                <p class="font-weight-black">รายละเอียดสินค้า</p>
                <tr>
                  <p class="font-weight-regular">
                    {{product.description}}
                  </p>
                </tr>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-row>-->
  </v-container>
</template>

<script>
export default {
  created() {
    this.getData();
  },
  data() {
    return {
      product: []
    };
  },
  methods: {
    async getData() {
      try {
        var { data } = await this.axios.get(
          "http://127.0.0.1:5000/api/1.0/product/" + this.$route.params.id
        );
        console.log(data);
        this.product = data;
      } catch (error) {
        console.log(error.message);
      }
    }
  }
};
</script>