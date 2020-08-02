<template>
    <div>
        <v-btn text color="white" @click="dialog=true" v-if="!isLoggedIn">
              <span class="mr-2">Login</span>
                  <v-icon color="white" >mdi-login</v-icon>
                 </v-btn>
        <v-btn text color="white" @click="signout" v-if="isLoggedIn">
              <span class="mr-2">Sign Out</span>
                  <v-icon color="white" >mdi-logout</v-icon>
                 </v-btn>
         <v-dialog v-model="dialog" max-width="500px">
            <v-card class="pa-4 rounded-xl white--text" color="rgba(255,255,255,0.7)">
            <div class="login-popup">
            <v-card-title class="display-2">Login</v-card-title>

            <v-text-field v-model="username" label="Username" color="black">
            </v-text-field>
            <v-text-field v-model="password" type="password" label="Password" color="black">
            </v-text-field>
            <v-btn @click="submit" class="success">Submit</v-btn>
            </div>
            </v-card>
        </v-dialog>
    </div>
</template>
<script>
import firebase from 'firebase';

export default {
    data(){
        return{
            username:"",
            password:"",
            dialog:false,
            user:"unknown",
            isLoggedIn:false
        }
    },
 
    methods:{
        submit(){
            console.log(this.username)
            firebase.auth().signInWithEmailAndPassword(this.username,this.password)
            .then(user=>{
                console.log("logged in")
                console.log(user)
                this.dialog=false;
                this.$router.replace({ name: "Dashboard" });
                if (firebase.auth().currentUser) {
                 this.isLoggedIn = true;
                 this.user = firebase.auth().currentUser.email;}
            },
          err => {
            alert(err.message);
          }
            )
        },
        async signout(){
      try{
           const data=await firebase.auth().signOut();
      console.log(data);
       this.$router.replace({ name: "Home" });
       this.isLoggedIn=false;
      }catch(err){
        console.log(err);
      }
    }
    }
}
</script>
<style scoped>
.login-popup{
    color: black;
    font-family: Georgia, 'Times New Roman', Times, serif;
}
</style>