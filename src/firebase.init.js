// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCufoVinV5c8AJwkGyrUa-m0_gRqvAyfk8",
  authDomain: "genius-car-services-e6dec.firebaseapp.com",
  projectId: "genius-car-services-e6dec",
  storageBucket: "genius-car-services-e6dec.appspot.com",
  messagingSenderId: "483429304929",
  appId: "1:483429304929:web:1dabe24aa092754414f820"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
