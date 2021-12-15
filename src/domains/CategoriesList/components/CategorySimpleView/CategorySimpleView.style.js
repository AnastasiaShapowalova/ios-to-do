import styled from 'styled-components'

export const CategorySimpleViewWrapper = styled.div`
  display: flex;
  outline: none;
  color: var(--white);
  border-radius: var(--border-radius-md);
  padding: var(--p-sm) var(--p-xl) var(--p-sm) var(--p-md);
  align-items: center;
  &:active {
    background-color: var(--blue-darken);
  }
`
