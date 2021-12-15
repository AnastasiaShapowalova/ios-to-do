import styled from 'styled-components'
import { css } from 'styled-components'

export const ColWrapper = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  margin: var(--m-0);
  max-width: 100%;

  flex: 1 0 0%;

  ${(props) =>
    props.col === 'auto' &&
    css`
      flex: 0 0 auto;
      width: auto;
    `}

  ${(props) =>
    props.col >= 1 &&
    props.col <= 12 &&
    css`
      flex: 0 0 auto;
      width: ${(props) => (props.col / 12) * 100}%;
    `}
`
