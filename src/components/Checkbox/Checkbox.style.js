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

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0%;
`

export const Label = styled.div`
  position: relative;
  cursor: pointer;
  &:before {
    content: '';
    position: absolute;
    display: block;
    top: -18px;
    left: 1px;
    width: 16px;
    height: 16px;
    border-radius: var(--border-radius-circle);
    background: var(--background-transparent);
    border: 1px solid ${(props) => iconColors[props.color]};
  }

  &:after {
    content: '';
    position: absolute;
    top: -15px;
    left: 4px;
    width: 12px;
    height: 12px;
    border-radius: var(--border-radius-circle);
    ${(props) =>
      props.isChecked &&
      css`
        background: ${(props) => iconColors[props.color]};
      `};
  }
`

export const CheckboxWrapper = styled.div`
  height: 20px;
  margin: var(--m-sm) var(--m-md) var(--m-0) var(--m-0);
`
