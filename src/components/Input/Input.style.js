import styled from 'styled-components'
import { css } from 'styled-components'

export const InputStyled = styled.input`
  border: none;
  color: var(--white);
  height: 16px;
  margin: var(--m-xs) var(--m-xl) var(--m-xs) var(--m-md);
  background: var(--background-transparent);
  outline: none;
  width: 100%;
  line-height: var(--lh-text-sm);
  font-size: var(--fs-text-sm);
  padding: var(--p-0);
  cursor: pointer;

  ${(props) =>
    props.variant === 'input-isFilled' &&
    css`
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
