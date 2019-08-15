
<template>
  <div>
    <v-layout>
      <v-flex xs2>
        <v-navigation-drawer
          id="app-drawer"
          app
          dark
          floating
          persistent
          mobile-break-point="991"
          width="260"
        >
          <v-layout>
            <v-flex offset-xs4>
              <v-avatar>
                <v-img src="https://cdn.vuetifyjs.com/images/john.png"></v-img>
              </v-avatar>
            </v-flex>
          </v-layout>
        </v-navigation-drawer>
      </v-flex>
      <v-flex xs10>
        <v-data-table :headers="headers" :items="datas" class="elevation-1">
          <template v-slot:items="props">
            <td>{{ props.item.brand }}</td>
            <td>{{ props.item.description }}</td>
            <td>{{ props.item.links }}</td>
            <td>{{ props.item.model }}</td>
            <td>{{ props.item.prince }}</td>
            <td>{{ props.item.tags }}</td>
          </template>
          <template v-slot:item.action="{ item }">
            <v-icon small class="mr-2" @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon small @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
export default {
    data () {
    return {
      datas: [],
      headers: [
        { text: 'brand', align: 'left', value: 'brand' },
        { text: 'description', align: 'left', value: 'description' },
        { text: 'links', align: 'left', value: 'links' },
        { text: 'model', align: 'left', value: 'model' },
        { text: 'prince', align: 'left', value: 'prince' },
        { text: 'tags', align: 'left', value: 'tags' },
        { text: 'action', align: 'left', value: 'action' }
      ]
    }
  },
  created () {
    this.getData()
  },editItem(item) {
      alert("แก้ไข")
  },
  methods: {
    async getData () {
     try {
       var {data} = await this.axios.get('http://127.0.0.1:5000/api/1.0/products')
        console.log(data)
        this.datas = data
      } catch (error) {
        console.log(error.message)
      }
    }
}
}
</script>
