import React from 'react'
import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <>
      <IconModule icon={<AiOutlineUnorderedList />} size="sm" change="false" />
      <Text type="h4" fw="normal" color="lighten">
        Categorie name
      </Text>
      <Text type="h4" fw="normal" color="darken">
        0
      </Text>
      <Button size="sm" color="dark" icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default CategorySimpleView
