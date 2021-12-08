import React from 'react'
import { CategorySimpleView } from '..'
import { Text } from '../../../../components'

const CategoryList = () => {
  return (
    <>
      <Text type="p" fw="unset" color="darken">
        My lists
      </Text>
      <CategorySimpleView />
    </>
  )
}

export default CategoryList
