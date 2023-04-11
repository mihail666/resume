import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/styles/index.scss'

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyBD6okPhNwzhCD7I8RWalMvc0uHZA1nZE8",
  authDomain: "fmr-resume.firebaseapp.com",
  projectId: "fmr-resume",
  storageBucket: "fmr-resume.appspot.com",
  messagingSenderId: "713357581582",
  appId: "1:713357581582:web:2bb72a6b4b4148115acb5f",
  measurementId: "G-92S96X18Z8"
};

// Initialize Firebase
initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
