<template>
  <v-app>
    <v-main>
      <appbar/>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import appbar from "./components/appbar"
export default {
  name: 'App',

  components: {
    appbar,
  },

  data: () => ({
    //
  }),
};
</script>
<style scoped>
  
</style>