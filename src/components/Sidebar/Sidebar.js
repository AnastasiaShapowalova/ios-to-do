import React from 'react'
import { SearchInput, Switcher } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'

const Sidebar = () => {
  return (
    <>
      <SearchInput />
      <Switcher />
      <CategoryList />
      <CategorySimpleForm />
      <button></button>
    </>
  )
}

export default Sidebar
