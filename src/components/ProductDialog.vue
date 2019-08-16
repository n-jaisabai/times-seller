<template>
    <v-dialog v-model="dialog" max-width="500px">
    <v-card>
      <v-card-title>
        <span class="headline text-uppercase">{{ formTitle }}</span>
      </v-card-title>
      <v-card-text>
        <v-container grid-list-md>
          <v-layout wrap>
            <v-flex xs12 sm6>
              <v-text-field outlined @keyup.enter="save" v-model="editedItem.brand" label="Brand"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6>
              <v-text-field outlined @keyup.enter="save" v-model="editedItem.model" label="Model"></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field
                  label="Description"
                  name="description"
                  v-model="editedItem.description"
                  outlined
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-text-field outlined @keyup.enter="save" v-model="editedItem.link" label="Image Link"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-6>
              <v-text-field outlined @keyup.enter="save" v-model="editedItem.price" label="Price"></v-text-field>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="green lighten-1" flat text @click="close">Cancel</v-btn>
        <v-btn color="green lighten-1" dark flat @click="save">save</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from "@/EventBus"
export default {
  data() {
    return {
      dialog: false,
      formTitle: "",
      editedItem: {},
      action: ""
    };
  },
  mounted() {
    EventBus.$on("newItem", this.newItem);
    EventBus.$on("editItem", this.editItem);
  },
  methods: {
    close() {
      this.dialog = false;
    },
    newItem() {
      this.formTitle = "New Product";
      this.action = "newItem";
      this.dialog = true;
      this.editedItem = {}
    },
    editItem(item) {
      this.formTitle = "Edit Product";
      this.action = "editItem";
      this.dialog = true;
      this.editedItem = item;
      console.log(this.editedItem._id);
    },
    async save() {
      if (this.action === "newItem") {
        try {
          console.log(this.editedItem);
          var item = {
              brand : this.editedItem.brand,
              model : this.editedItem.model,
              description : this.editedItem.description,
              links : [this.editedItem.link],
              price : this.editedItem.price
          }
          
          var { data } = await this.axios.post("http://127.0.0.1:5000/api/1.0/products", item);
          //EventBus.$emit("getdata");
          this.dialog = false;
        } catch (error) {
          console.log(error.message);
        }
      } else if (this.action === "editItem") {
        try {
          var { data } = await this.axios.put(
            "http://127.0.0.1:5000/api/1.0/product" + this.editedItem._id,
            this.editedItem
          );
          console.log('editedItem', this.editedItem, 'DATA: ', data);
          EventBus.$emit('getdata')
          this.dialog = false
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  }
};
</script>