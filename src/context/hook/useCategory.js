import { useState, useEffect } from 'react'
import firebase from '../../services/index'

const useCategory = (text) => {
  const [category, setCategory] = useState([])

  function calculateTaskNum(idOfCategory, text) {
    return text.filter(text.categoryId === idOfCategory).length
  }

  useEffect(() => {
    // let unsubscribe = firebase
    //   .firestore()
    //   .collection('category')
    //   .onSnapshot((snapshot) => {
    //     const data = snapshot.docs.map((doc) => {
    //       const categoryName = doc.data().name
    //       const idOfCategory = doc.data().id
    //       return {
    //         id: idOfCategory,
    //         name: categoryName,
    //         numOfTodos: calculateTaskNum(idOfCategory, text)
    //       }
    //     })
    //     setCategory(data)
    //   })
    // return () => unsubscribe()
  }, [])

  return category
}

export default useCategory
