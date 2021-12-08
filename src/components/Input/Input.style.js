import styled from 'styled-components'
import { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: baseline;
  outline: none;
  color: white;
  ${(props) =>
    props.size === 'large' &&
    css`
      flex-direction: column;
      width: 100%;
    `}
  ${(props) =>
    props.size === 'small' &&
    css`
      border-radius: 6px;
      width: 256px;
      padding: 8px 10px;
    `}
		${(props) =>
    props.size === 'medium' &&
    css`
      border-bottom: 1px solid rgb(99, 99, 99);
      border-radius: 4px;
      width: 256px;
      padding: 6px 8px 4px 6px;
      &:focus-within {
        outline: 2px solid rgb(11, 132, 255);
      }
    `}
  background-color: ${(props) =>
    props.fill === 'true'
      ? 'rgb(26, 109, 197)'
      : props.fill === 'false'
      ? 'rgb(65, 65, 65)'
      : 'transparent'};
`

export const CustomInput = styled.input`
  border: none;
  color: white;
  background-color: ${(props) =>
    props.fill === 'true' ? 'rgb(65, 65, 65)' : 'transparent'};
  outline: ${(props) =>
    props.outline === 'true' ? '2px solid rgb(26, 132, 255)' : 'none'};
  ${(props) =>
    props.size === 'small' &&
    css`
      height: 18px;
      width: auto;
      line-height: 8px;
      margin: 0px 10px;
      flex: 1;
      padding: 1px;
    `}
  ${(props) =>
    props.size === 'medium' &&
    css`
      width: 220px;
      padding: 0 0 0 8px;
    `}
  width: ${(props) => props.size === 'large' && '100%'};
`
export const IconWrapper = styled.div`
  padding-top: ${(props) => props.size === 'medium' && '3px'};
  font-size: small;
`

export const AddInput = styled.input`
  line-height: 5px;
  border: none;
  outline: none;
  background: none;
  color: rgb(149, 149, 149);
  padding-bottom: 4px;
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const EnterField = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: 10px;
  flex-direction: column;
  border-bottom: 1px solid rgb(64, 64, 64);
`
export const Radio = styled.input.attrs((/* props */) => ({ type: 'radio' }))`
  margin: 5px;
`
/* width: ${(props) => props.size || '200px'}; */
