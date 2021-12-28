import { useState, useEffect } from 'react'
import firestoreService from '../../services/firestoreService'

const useTask = () => {
  const [text, setText] = useState([])

  useEffect(() => {
    let unsubscribe = firestoreService.getDocument('text')
    // .db
    //   .collection('task')
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.map((doc) => {
    //       return { id: doc.id, ...doc.data() }
    //       setText(data)
    //     })
    //   })
    return () => unsubscribe()
  })
  return text
}

export default useTask
