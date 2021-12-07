import React from 'react'
import { Btn } from './Button.style'

const Button = (props) => {
  const { shape, type, children, size, hover, focus } = props
  return (
    <Btn shape={shape} type={type} size={size} hover={hover} focus={focus}>
      {children}
    </Btn>
  )
}

export default Button
