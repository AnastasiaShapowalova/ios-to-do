import React from 'react'
import { Input, Text, IconModule } from '../../../../components'
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
      icon={
        <IconModule
          icon={<AiOutlineUnorderedList />}
          size="sm"
          change="false"
        />
      }
      fill="true"
      outline="true"
      // {...inputStyles}
      size="sm"
    />
    // count
  )
}

export default CategorySimpleForm
