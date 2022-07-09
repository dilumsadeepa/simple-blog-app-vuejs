import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBq0piejCg0IblocXpx0s2n7ke9GtE9edc",
  authDomain: "simple-blog-5b9cf.firebaseapp.com",
  projectId: "simple-blog-5b9cf",
  storageBucket: "simple-blog-5b9cf.appspot.com",
  messagingSenderId: "392735649006",
  appId: "1:392735649006:web:45804ff1ef9b472d3017ff"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const app = createApp(App)

app.use(router)

app.mount('#app')
