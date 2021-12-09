import styled from 'styled-components'
import { css } from 'styled-components'

export const IconWrapper = styled.div`
  padding: var(--p-0);
  margin: var(--m-0);
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: var(--br-circle);

  width: ${(props) =>
    props.size === 'sm' ? '22px' : props.size === 'lg' ? '25px' : 'null'};
  height: ${(props) =>
    props.size === 'sm' ? '22px' : props.size === 'lg' ? '25px' : 'null'};
  color: var(--white);
  background: var(--blue);

  //will be improved when adding functional
  ${(props) =>
    props.change === 'true' &&
    css`
      color: var(--white);
      background-color: var(--blue);
      &:hover {
        background-color: var(--white);
        color: var(--blue);
      }
    `}
`

export const IconItem = styled.p`
  font-size: ${(props) =>
    props.size === 'sm'
      ? 'var(--fs)'
      : props.size === 'lg'
      ? 'var(--fs-h4)'
      : 'null'};
  line-height: var(--lh);
`

// size
