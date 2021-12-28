import { initializeApp } from 'firebase/app'

const firebaseConfig = {
  apiKey: 'AIzaSyBZMPl1Huw4zI1qbqLR5m5QRMKTzIeT-40',
  authDomain: 'todo-app-54dd4.firebaseapp.com',
  projectId: 'todo-app-54dd4',
  storageBucket: 'todo-app-54dd4.appspot.com',
  messagingSenderId: '770504022143',
  appId: '1:770504022143:web:3415b9ed582bd72e35874a'
}

const firebase = initializeApp(firebaseConfig)

export default firebase

// export default firebase

// // Import the functions you need from the SDKs you need
// import { initializeApp } from 'firebase/app'
// import { getFirestore } from 'firebase/firestore'
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: 'AIzaSyC58Zw3BB3NoLDCVg1fYyPcx0e8CTtLtX0',
//   authDomain: 'todoshka-ios.firebaseapp.com',
//   projectId: 'todoshka-ios',
//   storageBucket: 'todoshka-ios.appspot.com',
//   messagingSenderId: '923226935685',
//   appId: '1:923226935685:web:81a707c25982c3daedf4ec',
//   measurementId: 'G-CGKK04QV9P'
// }

// const firebase = initializeApp(firebaseConfig)
// const db = getFirestore()

// export { db, firebase }

// // import firebase from 'firebase/app'
// // import 'firebase/firestore'

// // const firebaseConfig = {
// //   apiKey: 'AIzaSyBZMPl1Huw4zI1qbqLR5m5QRMKTzIeT-40',
// //   authDomain: 'todo-app-54dd4.firebaseapp.com',
// //   projectId: 'todo-app-54dd4',
// //   storageBucket: 'todo-app-54dd4.appspot.com',
// //   messagingSenderId: '770504022143',
// //   appId: '1:770504022143:web:3415b9ed582bd72e35874a'
// // }

// // firebase.initializeApp(firebaseConfig)

// // export default firebase
