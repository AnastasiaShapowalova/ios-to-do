import styled from 'styled-components'
import { css } from 'styled-components'

// export const CustomInput = styled.input`
//   color: white;
//   width: 100%;
//   border: none;
//   outline: none;
//   background: none;
//   cursor: auto;
// `
// export const Wrapper = styled.div`
//   display: flex;
//   flex-direction: column;
// `
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

//create category
// export const CustomInput = styled.input`
// background: transparent;
// outline: none;
// border: none;
// width: 200px;
// color: white;
// line-height: 8px;
// padding: 2px;
// margin: 0px 10px;
// outline: 2px solid rgb(26, 132, 255);
// background: rgb(65, 65, 65);
// `

// export const Wrapper = styled.div`
// display: flex;
// justify-content: baseline;
// background-color: rgb(26, 109, 197);
// border-radius: 4px;
// width: 256px;
// padding: 8px 10px;
// `
// export const IconWrapper = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   width: 24px;
//   height: 24px;
//   color: rgb(255, 255, 255);
//   background: rgb(11, 132, 255);
// `

//search input
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
      border-radius: 4px;
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
  padding-top: 3px;
  font-size: small;
`
/* width: ${(props) => props.size || '200px'}; */
