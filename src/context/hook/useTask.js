import { useState, useEffect } from 'react'
import firebase from '../../services/index'

const useTask = () => {
  const [text, setText] = useState([])

  useEffect(() => {
    // let unsubscribe = firebase
    //   .firestore()
    //   .collection('task')
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.docs.map((doc) => {
    //       return {
    //         id: doc.id,
    //         ...doc.data()
    //       }
    //     })
    //     setText(data)
    //   })
    // return () => unsubscribe()
  }, [])

  return text
}

export default useTask
