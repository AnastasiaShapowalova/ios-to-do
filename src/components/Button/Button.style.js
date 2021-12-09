import styled from 'styled-components'
import { css } from 'styled-components'

export const ButtonStyled = styled.button`
  display: flex;
  align-items: flex-end;
  /* align-items: center; */
  /* justify-content: center; */
  border: none;
  outline: none;
  cursor: pointer;
  color: white;
  background-color: var(--gray-darken3);
  min-height: 18px;
  min-width: 18px;
  width: auto;
  height: auto;
  border-radius: var(--border-radius-sm);
  font-size: 12px;
  line-height: 18px;

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
      color: orange;
    `}
		${(props) =>
    props.color === 'dark' &&
    css`
      color: var(--gray-darken4);
    `}
		${(props) =>
    props.color === 'light' &&
    css`
      color: var(--gray-lighten2);
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
    props.variant === 'addListButton' &&
    css`
      background-color: var(--transparent);
      &:active {
        color: var(--gray-lighten4);
      }
    `}
		${(props) =>
    props.variant === 'deleteCategoryButton' &&
    css`
      background-color: var(--transparent);
      &:active {
        color: var(--gray-lighten4);
      }
    `}
		${(props) =>
    props.variant === 'deleteCategoryButton' &&
    css`
      background-color: var(--transparent);
    `}
		${(props) =>
    props.variant === 'clearInputButton' &&
    css`
      background-color: var(--transparent);
      &:active {
        color: var(--gray-darken4);
      }
    `}
		${(props) =>
    props.variant === 'flagTaskButton' &&
    css`
      &:active {
        color: var(--orange);
      }
    `}
		${(props) =>
    props.variant === 'addTaskButton' &&
    css`
      background-color: var(--background-transparent);
      &:hover {
        background-color: var(--gray-darken3);
      }
      &:active {
        color: var(--gray-lighten4);
      }
    `}
`

export const IconWrapper = styled.div`
  padding-right: 4px;
  line-height: 14px;
`
