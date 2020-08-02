import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import firebase from "firebase/app"

Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyCUadexYBzJ_ynF9GNidpfv7vxWkW-85IM",
  authDomain: "mock-test-7c6ca.firebaseapp.com",
  databaseURL: "https://mock-test-7c6ca.firebaseio.com",
  projectId: "mock-test-7c6ca",
  storageBucket: "mock-test-7c6ca.appspot.com",
  messagingSenderId: "514597386952",
  appId: "1:514597386952:web:d709e1e0927c2816c243fd"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db= firebase.firestore();
export default db;
let app;
firebase.auth().onAuthStateChanged(function(user) {
  console.log(user);
  if (!app) {
    /* eslint-disable no-new */
    app=new Vue({

      el: "#app",
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')}
}
)
