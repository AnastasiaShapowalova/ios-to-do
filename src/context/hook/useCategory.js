import { useState, useEffect } from 'react'
import firestoreService from '../../services/firestoreService'

const useCategory = (text) => {
  const [category, setCategory] = useState([])

  const calculateTaskNum = (id, text) => {
    return text.filter(text.categoryId === id).length
  }

  useEffect(() => {
    let unsubscribe = firestoreService.getDocument('category')

    // .db
    //   .collection('category')
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.map((doc) => {
    //       const categoryName = doc.data().name
    //       return {
    //         id: doc.id,
    //         taskNum: calculateTaskNum(doc.id, text),
    //         ...doc.data()
    //       }
    //       setCategory(data)
    //     })
    //   })
    return () => unsubscribe()
  })
  return category
}

export default useCategory
