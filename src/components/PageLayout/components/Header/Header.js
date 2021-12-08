import React from 'react'
import { Button, Text } from '../../../'
import { IoAddOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <>
      <Text type="h1" fw="bold" color="diff">
        Header
      </Text>
      <Text type="h1" color="diff">
        1
      </Text>
      <Button
        shape
        size="large"
        color="light"
        icon={<IoAddOutline />}
        hover></Button>
    </>
  )
}

export default Header
