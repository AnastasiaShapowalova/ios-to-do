import { useState, useEffect } from 'react'
import { firestoreService, db } from 'services'

const useTask = (getId) => {
  const [text, setText] = useState([])

  useEffect(() => {
    // let unsubscribe = firestoreService.db.getDocument()
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
    // console.log(unsubscribe)
    // return { unsubscribe }
  }, [])
  return text
}

export default useTask
