import styled from 'styled-components'

export const InputWrapper = styled.div`
  display: flex;
  justify-content: baseline;
  border-bottom: 1px solid gray;
  background: rgb(65, 65, 65);
  border-bottom: 1px solid rgb(99, 99, 99);
  outline: none;
  border-radius: 4px;
  padding: 4px 8px;
  width: 256px;
  line-height: 16px;
  font-size: 8px;
  color: white;
  &:focus-within {
    outline: 2px solid rgb(11, 132, 255);
  }
`

export const CustomInput = styled.input`
  background-color: transparent;
  border: none;
  outline: none;
  width: auto;
  color: white;
  flex: 1;
  padding-left: 8px;
`
export const IconWrapper = styled.div`
  padding-top: 3px;
  font-size: small;
`
