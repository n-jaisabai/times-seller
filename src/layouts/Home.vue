<template>
    <v-app>
        <Toolbar/>
        <v-content>
           
            <router-view />
        </v-content>
    </v-app>
</template>

<script>
export default {
    components: {
        Toolbar: () => import('@/components/Toolbar')
    }
}
</script>