// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { firestorePlugin } from 'vuefire'
import firebase from 'firebase/app'
import App from './App'
import 'firebase/firestore'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})

Vue.use(firestorePlugin)

firebase.initializeApp({
  projectId: 'fire-app-b4ccb',
  databaseURL: 'https://fire-app-b4ccb.firebaseio.com'
})

export const db = firebase.firestore()
