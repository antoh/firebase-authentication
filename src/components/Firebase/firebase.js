import app from "firebase/app";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCEa3erfIih3bGFg5RziVc32tHfHyXz0Ss",
  authDomain: "fir-login-e13fb.firebaseapp.com",
  databaseURL: "https://fir-login-e13fb.firebaseio.com",
  projectId: "fir-login-e13fb",
  storageBucket: "fir-login-e13fb.appspot.com",
  messagingSenderId: "865088407238",
  appId: "1:865088407238:web:1e5d0d48fa463fe677b9c7",
  measurementId: "G-ZX2B8FYSV0",
};
class Firebase {
  constructor() {
    app.initializeApp(config);

    this.auth = app.auth();
  }
  // *** Auth API ***
  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = (email) => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = (password) =>
    this.auth.currentUser.updatePassword(password);
}
export default Firebase;
