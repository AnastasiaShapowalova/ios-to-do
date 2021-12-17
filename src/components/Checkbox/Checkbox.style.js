import styled from 'styled-components'

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

export const CheckboxWrapper = styled.div`
  height: 20px;
  margin: var(--m-sm) var(--m-md) var(--m-0) var(--m-0);
`

export const CheckboxStyled = styled.input.attrs({ type: 'checkbox' })`
  appearance: none;
  display: inline-block;
  vertical-align: middle;

  border: 1px solid #555;
  width: 20px;
  height: 20px;
  padding: 4px;
  border-radius: var(--border-radius-circle);

  &:checked {
    border: 1px solid ${(props) => iconColors[props.color]};
    background: ${(props) => iconColors[props.color]};
    background-clip: content-box;
  }
`
