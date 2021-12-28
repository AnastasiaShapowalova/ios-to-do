import { useState } from 'react'
import { firestoreService } from 'services'

const useSetCategory = (addCategory, createCategory) => {
  const [category, setCategory] = useState('')
  const isSetCategory = (e) => {
    setCategory(e.target.value)
  }

  const AddCategory = (event) => {
    const newCategory = category.trim()
    if (event.key === 'Enter' && newCategory.length >= 1) {
      addCategory(newCategory)
      createCategory(newCategory, firestoreService.getId('category'))
      console.log(`category: ${newCategory}`)
      setCategory('')
    }
  }

  return { AddCategory, isSetCategory, category }
}

export default useSetCategory
