import React from 'react'
import { Text, IconModule } from '..'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const Switcher = () => {
  return (
    // switcher items : name, count, icon
    <>
      <IconModule
        icon={<AiOutlineUnorderedList />}
        size="large"
        change="true"
      />
      <Text type="h3" fw="bold" color="dark">
        0
      </Text>
      <Text type="h4" fw="bold" color="dark">
        {/* color='white' */}
        Switcher
      </Text>
    </>
  )
}

export default Switcher
