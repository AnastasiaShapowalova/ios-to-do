import React from 'react'
import { IconItem, IconWrapper } from './Icon.style'

const Icon = (props) => {
  const { icon } = props
  return (
    <IconWrapper>
      <IconItem>{icon}</IconItem>
    </IconWrapper>
  )
}

export default Icon
