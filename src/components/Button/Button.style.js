import styled from 'styled-components'

export const ButtonStyled = styled.button`
  cursor: pointer;
  padding: var(--p-xs);
  border: none;
  outline: none;
  display: flex;

  border-radius: ${(props) => props.shape && 'var(--border-radius-sm)'};

  background-color: ${(props) =>
    props.type ? 'var(--gray-darken3)' : 'var(--transparent)'};
  padding: ${(props) => props.type && 'var(--p-sm)'};

  color: ${(props) =>
    props.color === 'dark' ? 'var(--gray-darken4)' : 'default'};
  color: ${(props) =>
    props.color === 'light' ? 'var(--gray-lighten2)' : 'default'};

  line-height: ${(props) => props.size === 'sm' && 'var(--lh-h4)'};
  line-height: ${(props) =>
    props.size === 'lg' ? 'var(--lh-h3)' : 'var(--lh-h4)'};
  font-size: ${(props) => props.size === 'sm' && 'var(--fs-h4)'};
  font-size: ${(props) =>
    props.size === 'lg' ? 'var(--fs-h3)' : 'var(--fs-h4)'};

  &:hover {
    background-color: ${(props) => props.hover && 'var(--gray-darken3)'};
  }
  &:focus {
    color: ${(props) =>
      props.focus === 'dark' ? 'var(--gray-darken4)' : 'var(--gray-lighten4)'};
    color: ${(props) => props.warning && 'var(--orange)'};
  }
`

export const IconWrapper = styled.div`
  padding-right: var(--p-md);
`
