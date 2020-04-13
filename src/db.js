import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import { firestorePlugin } from 'vuefire'

Vue.use(firestorePlugin)

export const db = firebase.initializeApp({
  projectId: 'fire-app-b4ccb',
  databaseURL: 'https://fire-app-b4ccb.firebaseio.com'
}).firestore()
