import styled from 'styled-components'

export const Btn = styled.button`
  background-color: transparent;
  outline: none;
  border: none;
  border-radius: 5px;

  border-radius: ${(props) => props.shape === 'rounded' && '5px'};
  border-radius: ${(props) => (props.shape === 'circle' ? '50%' : 'rounded')};
  border-radius: ${(props) => (props.shape === 'square' ? '0' : 'rounded')};

  background-color: yellow;

  color: ${(props) => props.type === 'default' && 'gray'};
  color: ${(props) => (props.type === 'dark' ? 'black' : 'default')};
  &:hover {
    background-color: gray;
  }
`
