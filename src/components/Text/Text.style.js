import styled from 'styled-components'
import { css } from 'styled-components'

export const TextStyled = styled.div`
  font-size: var(--fs-text-md);
  line-height: var(--fs-text-lg);
  color: var(--white);

  ${(props) =>
    props.size === 'sm' &&
    css`
      font-size: var(--fs-text-sm);
      line-height: var(--lh-text-sm);
    `}
  ${(props) =>
    props.size === 'md' &&
    css`
      font-size: var(--fs-text-md);
      line-height: var(--lh-text-md);
    `}
	${(props) =>
    props.size === 'lg' &&
    css`
      font-size: var(--fs-text-lg);
      line-height: var(--lh-text-lg);
    `}

	${(props) =>
    props.color === 'gray-darken' &&
    css`
      color: var(--gray-darken2);
    `}
	${(props) =>
    props.color === 'gray' &&
    css`
      color: var(--gray);
    `}
	${(props) =>
    props.color === 'gray-lighten' &&
    css`
      color: var(--gray-lighten2);
    `}
`
