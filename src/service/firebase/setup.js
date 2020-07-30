import app from 'firebase/app';
import "firebase/auth";
import 'firebase/firestore';
import 'firebase/messaging';

const config = {

};

app.initializeApp(config);

export const db = app.firestore();//Todo firebase
export const auth = app.auth();//Login
export const messaging = app.messaging(); //Firebase Cloud messaging

export const signInGoogle = () =>{
  let provider = new app.auth.GoogleAuthProvider();
  app.auth().signInWithPopup(provider).then(res=>console.log(res));
};