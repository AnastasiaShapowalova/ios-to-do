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
    props.variant === 'categoryInput' &&
    css`
      background-color: var(--gray-darken2);
      outline: 2px solid var(--blue-lighten);
    `}
  ${(props) =>
    props.variant === 'taskInput' &&
    css`
      margin: var(--m-0);
      background-color: var(--background-transparent);
    `}
	${(props) =>
    props.variant === 'taskInput-muted' &&
    css`
      margin: var(--m-0);
      background-color: var(--background-transparent);
    `}
`
