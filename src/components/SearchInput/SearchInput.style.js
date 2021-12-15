import styled from 'styled-components'

export const SearchInputWrapper = styled.div`
  display: flex;
  outline: none;
  justify-content: baseline;
  color: var(--white);
  border-bottom: 1px solid var(--gray-darken1);
  border-radius: var(--border-radius-md);
  background-color: var(--gray-darken2);
  align-items: center;
  align-content: center;
  line-height: var(--lh-h5);
  padding: var(--p-xs) var(--p-md);
  font-size: var(--fs-text-md);
  margin: var(--m-xl) var(--m-sm);
  &:focus-within {
    outline: 2px solid var(--blue-lighten);
  }
`
