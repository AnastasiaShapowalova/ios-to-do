import styled from 'styled-components'
import { css } from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  align-items: flex-end;
  border: none;
  outline: none;
  cursor: pointer;
  min-height: 18px;
  min-width: 18px;
  width: auto;
  height: auto;
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  line-height: 18px;
  color: var(--gray-lighten2);
  background-color: var(--background-transparent);
  &:hover {
    background-color: var(--gray-darken3);
  }
  &:active {
    color: var(--gray-lighten4);
  }

  ${(props) =>
    props.shape === 'rounded' &&
    css`
      border-radius: var(--border-radius-sm);
    `}
  ${(props) =>
    props.shape === 'circle' &&
    css`
      border-radius: var(--border-radius-circle);
    `}
	${(props) =>
    props.shape === 'square' &&
    css`
      border-radius: 0;
    `}

		${(props) =>
    props.color === 'orange' &&
    css`
      &:active {
        color: orange;
      }
    `}
		${(props) =>
    props.color === 'gray-darken' &&
    css`
      color: var(--gray-darken4);
    `}
		${(props) =>
    props.color === 'gray-lighten' &&
    css`
      &:active {
        color: var(--gray-darken4);
      }
    `}


		${(props) =>
    props.size === 'sm' &&
    css`
      padding: 0;
      font-size: var(--fs-text-sm);
    `}
		${(props) =>
    props.size === 'md' &&
    css`
      padding: 4px;
      font-size: var(--fs-text-md);
    `}
		${(props) =>
    props.size === 'lg' &&
    css`
      padding: 4px;
      font-size: var(--fs-text-lg);
    `}


		${(props) =>
    props.variant === 'button-isBlanck' &&
    css`
      background-color: var(--transparent);
      &:hover {
        background-color: var(--transparent);
      }
    `}
		${(props) =>
    props.variant === 'button-isFilled' &&
    css`
      background-color: var(--gray-darken3);
      &:hover {
        background-color: var(--gray-darken3);
      }
    `}
`

export const IconWrapper = styled.div`
  padding-right: 4px;
  line-height: 14px;
`
