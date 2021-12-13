import styled from 'styled-components'
import { css } from 'styled-components'

export const ColWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  padding: 24px;
  margin: 0;
  max-width: 100%;
  background-color: cadetblue;

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
