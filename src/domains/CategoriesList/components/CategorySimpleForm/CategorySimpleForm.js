import React from 'react'
import { Input } from '../../../../components'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const CategorySimpleForm = () => {
  return (
    // icon, input
    <Input
      count="0"
      icon={<AiOutlineUnorderedList />}
      fill="true"
      outline="true"
      // {...inputStyles}
      size="small"
    />
    // count
  )
}

export default CategorySimpleForm
