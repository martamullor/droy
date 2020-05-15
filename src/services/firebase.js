import firebase from 'firebase'

const firebaseConfig = { // Poner estos datos en server?
  apiKey: 'AIzaSyBd5EjLbjtvoWmC4jKmFKcTa5Up87I9bTc',
  authDomain: 'droy-dev.firebaseapp.com',
  databaseURL: 'https://droy-dev.firebaseio.com',
  projectId: 'droy-dev',
  cliendId: '832956384747-g7hlgv9pm4vrncb27s0n0j0fjmoq1q25.apps.googleusercontent.com',
  storageBucket: 'droy-dev.appspot.com',
  messagingSenderId: '832956384747',
  appId: '1:832956384747:web:3870c2e89e40d7401385ae'
}

firebase.initializeApp(firebaseConfig)
firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)

export default firebase
