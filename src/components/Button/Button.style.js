import styled from 'styled-components'

export const Btn = styled.button`
  cursor: pointer;
  padding: 2px;
  border: none;
  outline: none;
  display: flex;
  //shape
  border-radius: ${(props) => props.shape && '5px'};
  //type
  background-color: ${(props) =>
    props.type ? 'rgb(54, 54, 54)' : 'transparent'};
  padding: ${(props) => props.type && '4px'};
  //color
  color: ${(props) => (props.color === 'dark' ? 'rgb(15, 15, 15)' : 'default')};
  color: ${(props) =>
    props.color === 'light' ? 'rgb(154, 154, 154)' : 'default'};
  //size
  line-height: ${(props) => props.size === 'small' && '15px'};
  line-height: ${(props) => (props.size === 'large' ? '20px' : '15px')};
  font-size: ${(props) => props.size === 'small' && '15px'};
  font-size: ${(props) => (props.size === 'large' ? '20px' : '15px')};

  &:hover {
    background-color: ${(props) => props.hover && 'rgb(54,54,54)'};
  }
  &:focus {
    color: ${(props) =>
      props.focus === 'dark' ? 'rgb(15, 15, 15)' : ' rgb(228, 228, 228)'};
    color: ${(props) => props.warning && 'rgb(255,158,11)'};
  }
`

export const IconWrapper = styled.div`
  padding-right: 8px;
`
