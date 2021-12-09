import styled from 'styled-components'

export const Btn = styled.button`
  cursor: pointer;
  padding: var(--p-xm);
  border: none;
  outline: none;
  display: flex;
  //shape
  border-radius: ${(props) => props.shape && 'var(--br-sm)'};
  //type
  background-color: ${(props) =>
    props.type ? 'var(--gray-darken3)' : 'var(--transparent)'};
  padding: ${(props) => props.type && 'var(--p-sm)'};
  //color
  color: ${(props) =>
    props.color === 'dark' ? 'var(--gray-darken4)' : 'default'};
  color: ${(props) =>
    props.color === 'light' ? 'var(--gray-lighten2)' : 'default'};
  //size
  line-height: ${(props) => props.size === 'sm' && 'var(--lh-h4)'};
  line-height: ${(props) =>
    props.size === 'lg' ? 'var(--lh-h3)' : 'var(--lh-h4)'};
  font-size: ${(props) => props.size === 'sm' && 'var(--h4)'};
  font-size: ${(props) => (props.size === 'lg' ? 'var(--h3)' : 'var(--h4)')};

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
