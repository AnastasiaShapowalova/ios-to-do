import React from 'react'
import { Button } from '../../../'
import { IoAddOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <>
      <h1>Header</h1>
      <Button
        shape
        size="large"
        color="light"
        icon={<IoAddOutline />}
        hover></Button>
      <p>count</p>
    </>
  )
}

export default Header
