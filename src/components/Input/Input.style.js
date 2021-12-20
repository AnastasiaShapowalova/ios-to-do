import styled from 'styled-components'
import { css } from 'styled-components'

export const InputStyled = styled.input`
  border: none;
  color: var(--white);
  height: 16px;
  background: var(--background-transparent);
  outline: none;
  width: 100%;
  font-size: var(--fs-text-md);
  line-height: var(--lh-text-md);
  padding: var(--p-0);
  cursor: pointer;

  ${(props) =>
    props.variant === 'input-isFilled' &&
    css`
      margin: var(--m-xs) var(--m-xl) var(--m-xs) var(--m-md);
      background-color: var(--gray-darken4);
      outline: 2px solid var(--blue-lighten);
      border-radius: var(--border-radius-xs);
    `}

  ${(props) =>
    props.variant === 'input-isMuted' &&
    css`
      color: var(--gray-lighten2);
    `}
`
