import React from 'react'
import { IconItem, IconWrapper } from './IconModule.style'

const IconModule = (props) => {
  const { icon, size, change } = props
  return (
    <IconWrapper size={size} change={change}>
      <IconItem size={size}>{icon}</IconItem>
    </IconWrapper>
  )
}

export default IconModule
