import React from 'react'
import { Button, Text } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <>
      <Text type="h4" fw="normal" color="lighten">
        Categorie name
      </Text>
      <Text type="h4" fw="normal" color="darken">
        0
      </Text>
      <Button size="small" color="dark" icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default CategorySimpleView
