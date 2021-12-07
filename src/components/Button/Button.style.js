import styled from 'styled-components'

export const Btn = styled.button`
  padding: 2px;
  border: none;
  outline: none;
  border-radius: ${(props) => props.shape && '5px'};
  display: flex;
  background-color: ${(props) => props && 'transparent'};
  color: ${(props) => (props.type === 'dark' ? 'rgb(15, 15, 15)' : 'default')};
  color: ${(props) =>
    props.type === 'light' ? 'rgb(154, 154, 154)' : 'default'};
  cursor: pointer;
  line-height: ${(props) => props.size === 'small' && '15px'};
  line-height: ${(props) => (props.size === 'large' ? '20px' : '15px')};
  font-size: ${(props) => props.size === 'small' && '15px'};
  font-size: ${(props) => (props.size === 'large' ? '20px' : '15px')};
  &:hover {
    background-color: ${(props) => props.hover && 'rgb(54,54,54)'};
  }
  &:focus {
    color: ${(props) =>
      props.focus === 'dark' ? 'rgb(15, 15, 15)' : 'rgb(228, 228, 228)'};
  }
`
