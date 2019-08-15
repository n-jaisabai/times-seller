<template>
    <v-container class="grey lighten-5" >
        <v-layout row  >
        <v-row no-gutters >
          <v-col cols="8" sm="3" flat v-for="(link, index) in 12" :key="index">
            
            <v-card flat  >
            <v-img
              src="../assets/Logo1.png"
              contain
              height="200"
            > 
            </v-img>
             <v-card-text>
                 <p class="text--primary text-center">
                    SEIKO
                </p>
                 <p class="text--primary text-center" >
                    ราคา 27,000 บาท
                </p>
                
             </v-card-text>
             <v-layout row align-center justify-center  fill-height="" >
                  <v-btn outlined @click.native="clickTest()" >ซื้อ</v-btn>
             </v-layout>
            </v-card>
            
          </v-col>
        </v-row>    
     </v-layout>
    </v-container>
</template>
<script>
export default {
    methods: {
    clickTest(){
      alert('WORK!')
    }
}
}
</script>