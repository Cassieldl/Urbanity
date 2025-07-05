import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDX6-l6Xo1v65CnZ41scxhuOhvLqkJKZxs",
  authDomain: "urbanity-cti.firebaseapp.com",
  projectId: "urbanity-cti",
  storageBucket: "urbanity-cti.firebasestorage.app",
  messagingSenderId: "207379587999",
  appId: "1:207379587999:web:1fa2d2d774c92f0c8193aa"
};

const app = initializeApp(firebaseConfig);

export default app;