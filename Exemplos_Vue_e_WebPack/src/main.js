// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueFire from 'vuefire'
import firebase from 'firebase'
import push from './push'

Vue.use(VueFire)
// Initialize Firebase
let config = {
  apiKey: "AIzaSyCdU3AWYSuTQcmtzSNlHvdJcE-bqFQHLbk",
  authDomain: "pwa-teste-24c93.firebaseapp.com",
  databaseURL: "https://pwa-teste-24c93.firebaseio.com",
  projectId: "pwa-teste-24c93",
  storageBucket: "pwa-teste-24c93.appspot.com",
  messagingSenderId: "104909893674"
};
firebase.initializeApp(config);
push()

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: {
    App
  }
})
