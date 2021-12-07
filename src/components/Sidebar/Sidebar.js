import React from 'react'
import { SearchInput, Switcher } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Sidebar = () => {
  return (
    <>
      <SearchInput />
      <Switcher />
      <Button size="small" color="light" icon={<IoMdAddCircleOutline />}>
        Add List
      </Button>
      <CategoryList />
      <CategorySimpleForm />
    </>
  )
}

export default Sidebar
