import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: `${process.env.REACT_APP_PROJECT_FIREBASE}.firebaseapp.com`,
  databaseURL: `https://${process.env.REACT_APP_PROJECT_FIREBASE}.firebaseio.com`,
  projectId: process.env.REACT_APP_PROJECT_FIREBASE,
  cliendId: process.env.REACT_APP_FIREBASE_CLIENT_ID,
  storageBucket: `${process.env.REACT_APP_PROJECT_FIREBASE}.appspot.com`,
  messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGE_SENDER_ID,
  appId: process.env.REACT_APP_FIREBASE_APP_ID
}

firebase.initializeApp(firebaseConfig)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default firebase
