import styled from 'styled-components'
import { css } from 'styled-components'

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0%;
  margin: 0;
  margin-right: 16px;
`
export const Label = styled.div`
  position: relative;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    display: block;
    top: 8px;
    left: 0;
    width: 18px;
    height: 18px;
    border-radius: var(--border-radius-circle);
    background: var(--background-transparent);
    border: 1px solid var(--blue);
    ${(props) =>
      props.color === 'gray' &&
      css`
        border-color: var(--gray-darken2);
      `}
    ${(props) =>
      props.color === 'red' &&
      css`
        border-color: var(--red);
      `}
  }
  &:after {
    content: '';
    position: absolute;
    top: 11px;
    left: 3px;
    width: 14px;
    height: 14px;
    border-radius: var(--border-radius-circle);
    background: ${(props) => props.isChecked && 'var(--blue)'};

    ${(props) =>
      props.isChecked &&
      props.color === 'red' &&
      css`
        background-color: var(--red);
      `}
    ${(props) =>
      props.isChecked &&
      props.color === 'gray' &&
      css`
        background-color: var(--gray-darken2);
      `}
  }
`
