import styled from 'styled-components'

export const RowWrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  flex-wrap: wrap;
  margin-top: calc(-1 * var(--p-0));
  margin-right: calc(-0.5 * 24px);
  margin-left: calc(-0.5 * 24px);

  & > * & {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    margin-top: 0;
  }
`
