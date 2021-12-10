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
  width: 26px;
  height: 26px;
  font-size: var(--fs-text-md);
  line-height: var(--lh-text-md);
  border-radius: var(--border-radius-circle);
  padding: var(--p-0);
  margin: var(--m-0);
  color: var(--white);
  background-color: ${(props) => iconColors[props.color]};

  &:active {
    ${(props) =>
      props.changeable &&
      css`
        background-color: var(--white);
        color: ${(props) => iconColors[props.color]};
      `}
`
