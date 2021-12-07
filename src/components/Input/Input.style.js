import styled from 'styled-components'

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
// export const AddInput = styled.input`
//   line-height: 5px;
//   border: none;
//   outline: none;
//   background: none;
//   color: rgb(149, 149, 149);
//   padding-bottom: 4px;
// `
// export const InputWrapper = styled.div`
//   display: flex;
//   flex-direction: row;
// `
// export const EnterField = styled.div`
//   display: flex;
//   justify-content: flex-start;
//   width: 100%;
//   margin-left: 10px;
//   flex-direction: column;
//   border-bottom: 1px solid rgb(64, 64, 64);
// `
// export const IconWrapper = styled.div``
// export const Radio = styled.input.attrs((/* props */) => ({ type: 'radio' }))`
//   margin: 5px;
// `

//create category
// export const CustomInput = styled.input`
//   background: transparent;
//   outline: none;
//   border: none;
//   width: 200px;
//   color: white;
//   line-height: 8px;
//   padding: 2px;
//   margin: 0px 10px;
//   outline: 2px solid rgb(26, 132, 255);
//   background: rgb(65, 65, 65);
// `

// export const Wrapper = styled.div`
//   display: flex;
//   justify-content: baseline;
//   background-color: rgb(26, 109, 197);
//   border-radius: 4px;
//   width: 256px;
//   padding: 8px 10px;
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
  border-bottom: 1px solid gray;
  background: rgb(65, 65, 65);
  border-bottom: 1px solid rgb(99, 99, 99);
  outline: none;
  border-radius: 4px;
  padding: 6px 8px;
  padding-top: 6px;
  padding-bottom: 4px;
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
