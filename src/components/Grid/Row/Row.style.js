import styled from 'styled-components'

export const RowWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--p-0));
  padding: var(--p-0);
  & > * {
    flex-shrink: 0;
    max-width: 100%;
    margin-top: var(--m-0);
  }
`
