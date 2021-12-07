import React from 'react'
import { Button } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <>
      <h1>name</h1>
      <p>count</p>
      <Button size="small" type="dark">
        <IoCloseOutline />
      </Button>
    </>
  )
}

export default CategorySimpleView
