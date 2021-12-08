import React from 'react'
import { IconItem, IconWrapper } from './Icon.style'

const Icon = (props) => {
  const { icon, size, change } = props
  return (
    <IconWrapper size={size} change={change}>
      <IconItem size={size}>{icon}</IconItem>
    </IconWrapper>
  )
}

export default Icon
