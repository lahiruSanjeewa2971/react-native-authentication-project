// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiRGgJaMAbLlMUJ3f_j70brGjj280GZj8",
  authDomain: "fir-auth-e5cf3.firebaseapp.com",
  projectId: "fir-auth-e5cf3",
  storageBucket: "fir-auth-e5cf3.appspot.com",
  messagingSenderId: "185246071896",
  appId: "1:185246071896:web:94af18d1d143c951d69e2d"
};

// Initialize Firebase
let app;
if(firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else{
    app = firebase.app();
}

const auth = firebase.auth();

export { auth };