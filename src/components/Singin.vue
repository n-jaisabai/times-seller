<template>
    <v-app >
        <v-container >
            
             <v-card >
            <v-layout align-center justify-center  row fill-height >
                <v-flex xs4 >
                   
                        <v-img :src="require('@/assets/Logo1.png')"  height="300" width="450" max-width="550" max-height="300"></v-img>
                    <v-text-field 
                        name="username"
                        label="username"
                        id="username"
                        v-model="username"
                        app
                    ></v-text-field>
                    <v-text-field
                        name="password"
                        label="password"
                        id="password"
                        type="password"
                        v-model="password"
                        @keyup.enter="login"
                    ></v-text-field>
                    <v-btn block="" @click="login" 
                            depressed color="grey darken-4" 
                            class="ma-2 white--text" >
                            Login
                    </v-btn>
                    <v-layout align-center justify-center  row fill-height>
                        <v-btn  to="categories" 
                            depressed color="grey darken-2"
                            class="ma-2 white--text"
                            fab
                             >
                            <v-icon >mdi-home</v-icon>
                    </v-btn>
                    </v-layout>
                    
                    
                </v-flex>
            </v-layout>
            </v-card>
           
        </v-container>
         </v-img>
    </v-app>
</template>
<script>
export default {
    data (){
            return{
                username: '',
                password: ''
            }
    },
    methods:{ 
        login (){
            if(this.username === 'qiwzee' && this.password === '1234'){
                alert('Login correct')
                this.$router.push('/warehouse') 
            }else{
                alert('Login Fail')
            }
        }
    }
}
</script>