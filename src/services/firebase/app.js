import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyC58Zw3BB3NoLDCVg1fYyPcx0e8CTtLtX0',
  authDomain: 'todoshka-ios.firebaseapp.com',
  projectId: 'todoshka-ios',
  storageBucket: 'todoshka-ios.appspot.com',
  messagingSenderId: '923226935685',
  appId: '1:923226935685:web:81a707c25982c3daedf4ec',
  measurementId: 'G-CGKK04QV9P'
}

const app = initializeApp(firebaseConfig)

export default app
