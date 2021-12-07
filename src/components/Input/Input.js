import React from 'react'
import { InputWrapper, CustomInput, IconWrapper } from './Input.style'
// import { Button } from '../'
import { MdCancel } from 'react-icons/md'

const Input = (props) => {
  const { placeholder, icon, button } = props
  return (
    <>
      <InputWrapper placeholder={placeholder}>
        <IconWrapper>{icon && icon}</IconWrapper>
        <CustomInput />
        {button && button}
      </InputWrapper>
    </>
  )
}

export default Input
