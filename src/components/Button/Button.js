import React from 'react'
import { Btn, IconWrapper } from './Button.style'

const Button = (props) => {
  const { shape, color, children, size, hover, focus, icon, type, warning } =
    props
  return (
    <Btn
      shape={shape}
      //rounded, circle
      color={color}
      //light, dark
      size={size}
      //large, small
      type={type}
      //fill
      hover={hover}
      focus={focus}
      icon={icon}
      warning>
      {icon && children ? (
        <>
          <IconWrapper>{icon}</IconWrapper>
          {children}
        </>
      ) : icon ? (
        icon
      ) : children ? (
        children
      ) : null}
    </Btn>
  )
}

export default Button
