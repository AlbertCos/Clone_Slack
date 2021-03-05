// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyARstgwcTkkYGBxDT3pSymaOJAPi3TjDt0",
    authDomain: "slack-clone-app-73abb.firebaseapp.com",
    projectId: "slack-clone-app-73abb",
    storageBucket: "slack-clone-app-73abb.appspot.com",
    messagingSenderId: "220087748406",
    appId: "1:220087748406:web:956dae24cc22c1220dd597",
    measurementId: "G-FGQ6EGGE5H"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestone();
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth,provider};
  export default db;
