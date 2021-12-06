import React from 'react'
import { Btn } from './Button.style'

const Button = (props) => {
  const { shape, type, children } = props
  return (
    <Btn shape={shape} type={type}>
      {children}
    </Btn>
  )
}

export default Button
