import styled from 'styled-components'
import { css } from 'styled-components'

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  font-size: var(--fs-text-md);
  line-height: var(--lh-text-md);
  border-radius: var(--border-radius-circle);
  padding: var(--p-0);
  margin: var(--m-0);
  color: var(--white);
  background-color: var(--blue);

  ${(props) =>
    props.color === 'red' &&
    props.variant === 'isChangeable' &&
    css`
      color: var(--white);
      background-color: var(--red);
      &:active {
        background-color: var(--white);
        color: var(--red);
      }
    `}
  ${(props) =>
    props.color === 'blue' &&
    props.variant === 'isChangeable' &&
    css`
      color: var(--white);
      background-color: var(--blue);
      &:active {
        background-color: var(--white);
        color: var(--blue);
      }
    `}
		 ${(props) =>
    props.color === 'dark' &&
    props.variant === 'isChangeable' &&
    css`
      color: var(--white);
      background-color: var(--dark);
      &:active {
        background-color: var(--white);
        color: var(--dark);
      }
    `}
		 ${(props) =>
    props.color === 'orange' &&
    props.variant === 'isChangeable' &&
    css`
      color: var(--white);
      background-color: var(--orange);
      &:active {
        background-color: var(--white);
        color: var(--orange);
      }
    `}
`
