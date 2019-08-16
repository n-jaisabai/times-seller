<template>
  <v-dialog v-model="dialog" max-width="500px" persistent>
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
              <v-text-field
                outlined
                @keyup.enter="save"
                v-model="editedItem.links[0]"
                label="Image Link"
              ></v-text-field>
            </v-flex>
            <v-flex xs12>
              <v-combobox
                v-model="chips"
                :items="items"
                chips
                clearable
                label="Tags"
                multiple
                prepend-icon="mdi-tag"
                solo
              >
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)"
                    flat
                  >
                    <strong>{{ item }}</strong>&nbsp;
                  </v-chip>
                </template>
              </v-combobox>
            </v-flex>

            <v-flex xs12 sm6 offset-6>
              <v-text-field outlined @keyup.enter="save" v-model="editedItem.price" label="Price"></v-text-field>
            </v-flex>
            <v-flex xs12 sm6 offset-6>
              <v-btn color="green lighten-1" flat text @click="close">Cancel</v-btn>
              <v-btn color="green lighten-1" dark flat @click="save">save</v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { EventBus } from "@/EventBus";
export default {
  data() {
    return {
      dialog: false,
      formTitle: "",
      editedItem: {},
      action: "",
      chips: [],
      items: ["male", "female"]
    };
  },
  mounted() {
    EventBus.$on("newItem", this.newItem);
    EventBus.$on("editItem", this.editItem);
  },
  methods: {
    remove(item) {
      this.chips.splice(this.chips.indexOf(item), 1);
      this.chips = [...this.chips];
    },
    close() {
      this.dialog = false;
    },
    newItem() {
      this.formTitle = "New Product";
      this.action = "newItem";
      this.dialog = true;
      this.editedItem = {
        brand: "",
        model: "",
        description: "",
        links: [""],
        price: ""
      };
    },
    editItem(item) {
      this.formTitle = "Edit Product";
      this.action = "editItem";
      this.dialog = true;
      console.log(item);

      this.editedItem = item;
      this.chips = item.tags;
    },
    async save() {
      if (this.action === "newItem") {
        try {
          var item = {
            brand: this.editedItem.brand,
            model: this.editedItem.model,
            description: this.editedItem.description,
            links: [this.editedItem.links[0]],
            price: this.editedItem.price,
            tags: this.chips
          };

          var { data } = await this.axios.post(
            "http://127.0.0.1:5000/api/1.0/products",
            item
          );
          EventBus.$emit("getdata");
          this.dialog = false;
        } catch (error) {
          console.log(error.message);
        }
      } else if (this.action === "editItem") {
        try {
          var item = {
            brand: this.editedItem.brand,
            model: this.editedItem.model,
            description: this.editedItem.description,
            links: [this.editedItem.links[0]],
            price: this.editedItem.price,
            tags: this.chips
          };
          var { data } = await this.axios.put(
            "http://127.0.0.1:5000/api/1.0/product/" +
              this.editedItem.product_id,
            item
          );
          console.log("editedItem", this.editedItem, "DATA: ", data);
          EventBus.$emit("getdata");
          this.dialog = false;
        } catch (error) {
          console.log(error.message);
        }
      }
    }
  }
};
</script>