import styled from 'styled-components'
import { css } from 'styled-components'

const iconColors = {
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
  purple: 'var(--purple)'
}

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--border-radius-circle);
  padding: var(--p-md);
  margin: var(--m-0);
  color: var(--white);
  background-color: ${(props) => iconColors[props.color]};
	line-height: var(--lh-text-md);
  font-size: var(--fs-text-md);

  &:active {
    ${(props) =>
      props.changeable &&
      css`
        background-color: var(--white);
        color: ${(props) => iconColors[props.color]};
      `}
`
