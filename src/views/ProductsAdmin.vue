<template>
  <v-container class="grey lighten-5">
    <ProductDialog />
    <v-btn color="green lighten-1 white--text my-5" height="50" block @click="newItem">New Products</v-btn>
    <v-layout row>
      <v-row no-gutters>
        <v-col
          cols="8"
          sm="3"
          flat
          v-for="(product, index) in products"
          :key="index"
          class="pa-2"
        >
         <v-hover v-slot:default="{ hover }">
          <v-card flat class="fill-height pa-5" :elevation="hover ? 8 : 0">
            <v-layout>
              <v-flex offset-xs10>
                  <v-menu transition="slide-y-transition" bottom >
                    <template v-slot:activator="{ on }">
                      <v-btn  v-on="on" fab small outlined color="grey darken-1">
                        <v-icon>mdi-database-settings</v-icon>
                      </v-btn>
                    </template>
                    <v-list>
                      <v-list-item @click="editItem(product)">
                        <v-list-item-title ><v-icon>mdi-database-edit</v-icon>แก้ไข</v-list-item-title>
                      </v-list-item>
                      <v-list-item @click="deleteItem(product)">
                        <v-list-item-title><v-icon>mdi-eraser</v-icon>ลบ</v-list-item-title>
                      </v-list-item>
                    </v-list>
                  </v-menu>
              </v-flex>
              
            </v-layout>
            
            <v-img :src="product.links[0]" contain height="200"></v-img>
            <v-list-item three-line>
              <v-list-item-content>
                <v-list-item-title class="headline mb-1 text-center">{{product.brand}}</v-list-item-title>
                <v-list-item-subtitle class="text-center">{{product.model}}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
            <v-list-item>
              <v-list-item-title
                class="title mb-1 text-center orange--text text--lighten-1"
                color
              >ราคา {{product.price}} บาท</v-list-item-title>
            </v-list-item>
          </v-card>
         </v-hover>
        </v-col>
      </v-row>
    </v-layout>
  </v-container>
</template>

<script>
import { EventBus } from "@/EventBus";
import ProductDialog from "../components/ProductDialog";
export default {
  components: {
    ProductDialog
  },
  created() {
    this.getData();
  },
  mounted() {
      EventBus.$on("getdata", this.getData);
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
        console.log(product);
        
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
    },
    newItem() {
      EventBus.$emit("newItem");
    },
    editItem(item) {
        EventBus.$emit("editItem", item);
    },
    async deleteItem (item) {
      if (confirm('Are you sure you want to delete this item?')) {
        try {
            var { data } = await this.axios.delete(
              'http://127.0.0.1:5000/api/1.0/product/' + item.product_id)
            this.getData()
        } catch (error) {
          console.log(error.message)
           this.getData()
        }
      }
    }
  }
};
</script>
