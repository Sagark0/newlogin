<template>
  <div class="navbar">
      <h1> Welcome {{user}}</h1>
      
    <v-layout row wrap justify-center>
      <v-flex md4 v-for="object in filtered" :key="object.key">

   
    <v-card class="mx-auto ma-3" max-width="500px" >
          <v-card-title>{{ object.name }}</v-card-title>
          <v-card-text>{{ object.DOB}}</v-card-text>
          <v-card-text>{{object.hometown}}</v-card-text>
    </v-card>
   
      </v-flex>
   </v-layout>
  </div>
</template>

<script>
import firebase from 'firebase';
import db from "@/main"

export default {
  data(){
    return{
      username:[
   
      ],
      user: "",
    }
  },
   created(){
    if (firebase.auth().currentUser) {
      this.isLoggedIn = true;
      this.user = firebase.auth().currentUser.email; }

      db.collection("user").onSnapshot(res=>{
        const changes = res.docChanges();
        console.log(changes);
        changes.forEach(change =>{
          this.username.push(change.doc.data())
        })
      })
    },
    computed:{
          filtered(){
          return this.username.filter(user=>{
            return user.email=== this.user
          })
        }
    },
  
  methods:{

  }
}
</script>

<style>
.navbar{
    background:url("../assets/background.jpg") no-repeat center fixed;
    background-size: cover;
    font-family: Georgia, 'Times New Roman', Times, serif;
    height:100%;
    text-align: center;
    padding-top:200px ;

}
</style>