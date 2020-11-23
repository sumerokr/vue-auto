import firebase from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDI5w04sBdGa7TKq2Ck0WuqdHB4H_Px6sI",
  authDomain: "vue-auto.firebaseapp.com",
  databaseURL: "https://vue-auto.firebaseio.com",
  projectId: "vue-auto",
  storageBucket: "vue-auto.appspot.com",
  messagingSenderId: "1002597140990",
  appId: "1:1002597140990:web:24cf1afae429fdd23dd8af",
};

firebase.initializeApp(firebaseConfig);

export { firebase };
