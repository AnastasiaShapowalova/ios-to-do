import styled from 'styled-components'

export const SwitcherStyled = styled.div`
  background-color: var(--gray-darken2);
  border-radius: var(--border-radius-xl);
  max-width: 100%;
  min-width: 115px;
  padding: var(--p-md) var(--p-md) var(--p-sm) var(--p-md);
  margin: var(--m-sm);
  overflow: hidden;
`

export const HeadingWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-bottom: var(--p-xs);
`

export const SwitcherListWrapper = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  cursor: pointer;
`
