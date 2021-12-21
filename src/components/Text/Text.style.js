import styled from 'styled-components'
import { css } from 'styled-components'

const textColor = {
  blue: 'var(--blue)',
  red: 'var(--red)',
  orange: 'var(--orange)',
  gray: 'var(--gray)',
  yellow: 'var(--yellow)',
  green: 'var(--green)',
  violet: 'var(--violet)',
  brown: 'var(--brown)',
  peach: 'var(--peach)',
  pink: 'var(--pink)',
  purple: 'var(--purple)',
  'gray-darken': 'var(--gray-darken2)',
  'gray-lighten': 'var(--gray-lighten2) '
}

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

		color: ${(props) => textColor[props.color]};
`
