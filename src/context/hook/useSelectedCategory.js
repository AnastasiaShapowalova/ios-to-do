import { useState } from 'react'

const useSelectedCategory = () => {
  const [selectedCategory, setSelectedCategory] = useState()

  return { selectedCategory, setSelectedCategory }
}

export default useSelectedCategory
