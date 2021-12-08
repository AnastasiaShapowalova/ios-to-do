import React from 'react'
import { Input, Text, Icon } from '../../../../components'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const CategorySimpleForm = () => {
  return (
    // icon, input
    <Input
      count={
        <Text type="h4" fw="normal" color="darken">
          0
        </Text>
      }
      icon={<Icon icon={<AiOutlineUnorderedList />} />}
      fill="true"
      outline="true"
      // {...inputStyles}
      size="small"
    />
    // count
  )
}

export default CategorySimpleForm
