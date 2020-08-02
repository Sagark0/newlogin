<template>
<div>
    <v-app-bar color="rgba(0,0,0,0.3)" class="white--text" fixed>
        <v-toolbar-title>Light Inc.</v-toolbar-title>
        <v-spacer></v-spacer>
        <popup/>
        
    </v-app-bar>
</div>
  
</template>

<script>
import popup from "./popup"
export default {
    data(){
        return{
            dialog:false
        }
    },
    components:{
        popup
    },
 

}
</script>

<style>
.navbar{
    background:url("../assets/bg.jpg") no-repeat center fixed;
    background-size: cover;
    font-family: Georgia, 'Times New Roman', Times, serif;
    height:80%;
}

</style>