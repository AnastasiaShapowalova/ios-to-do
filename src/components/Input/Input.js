import React from 'react'
import {
  InputWrapper,
  CustomInput,
  IconWrapper,
  AddInput,
  Radio,
  Wrapper,
  EnterField
} from './Input.style'

const Input = (props) => {
  // const { color, children, size, focus, type } = props
  const { placeholder, icon, button, count, note, radio } = props
  return (
    <>
      <Wrapper placeholder={placeholder}>
        {icon && <IconWrapper>{icon}</IconWrapper>}
        {/* {note && radio ? (
          <InputWrapper>
            <Radio />
            <EnterField>
              <CustomInput />
              <AddInput placeholder={placeholder} />
            </EnterField>
          </InputWrapper>
        ) : ( */}
        <CustomInput />
        {/* )} */}
        {count && count}
        {button && button}
      </Wrapper>
    </>
  )
}

export default Input
