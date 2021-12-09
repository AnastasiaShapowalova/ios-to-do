import styled from 'styled-components'
import { css } from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  justify-content: baseline;
  outline: none;
  color: var(--white);
  ${(props) =>
    props.size === 'lg' &&
    css`
      flex-direction: column;
      width: 100%;
    `}
  ${(props) =>
    props.size === 'sm' &&
    css`
      border-radius: var(--br-lg);
      width: 256px;
      padding: var(--p-md) var(--p-lg);
    `}
		${(props) =>
    props.size === 'md' &&
    css`
      border-bottom: 1px solid var(--gray-darken1);
      border-radius: var(--br-md);
      width: 256px;
      padding: var(--p-sm) var(--p-md) var(--p-xm) var(--p-md);
      &:focus-within {
        outline: 2px solid var(--blue-lighten);
      }
    `}
  background-color: ${(props) =>
    props.fill === 'true'
      ? 'var(--blue-darken)'
      : props.fill === 'false'
      ? 'var(--gray-darken2)'
      : 'var(--transparent)'};
`

export const CustomInput = styled.input`
  border: none;
  color: white;
  line-height: var(--lh-h4);
  font-size: var(--fs-h4);
  background-color: ${(props) =>
    props.fill === 'true' ? 'var(--gray-darken2)' : 'var(--transparent)'};
  outline: ${(props) =>
    props.outline === 'true' ? '2px solid var(--blue-lighten)' : 'none'};
  ${(props) =>
    props.size === 'sm' &&
    css`
      height: 18px;
      width: auto;
      margin: var(--m-0) var(--m-lg);
      flex: 1;
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      width: 220px;
      padding: var(--p-0) var(--p-0) var(--p-0) var(--p-md);
    `}
  width: ${(props) => props.size === 'lg' && '100%'};
`
export const IconWrapper = styled.div`
  ${(props) =>
    props.size === 'md' &&
    css`
      padding-top: var(--p-xm);
      font-size: var(--fs-h4);
    `};
`

export const AddInput = styled.input`
  line-height: var(--lh-h4);
  font-size: var(--fs-h4);
  border: none;
  outline: none;
  background: none;
  color: var(--gray-lighten1);
  padding-bottom: var(--p-sm);
`
export const InputWrapper = styled.div`
  display: flex;
  flex-direction: row;
`
export const EnterField = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-left: var(--m-lg);
  flex-direction: column;
  border-bottom: 1px solid var(--gray-darken2);
`
export const Radio = styled.input.attrs((/* props */) => ({ type: 'radio' }))`
  margin: var(--m-sm);
`
/* width: ${(props) => props.size || '200px'}; */

// size
