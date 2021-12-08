import styled from 'styled-components'
import { css } from 'styled-components'

export const IconWrapper = styled.div`
  padding: 0;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  width: ${(props) =>
    props.size === 'small' ? '20px' : props.size === 'large' ? '25px' : 'null'};
  height: ${(props) =>
    props.size === 'small' ? '20px' : props.size === 'large' ? '25px' : 'null'};
  color: white;
  background: rgb(17, 107, 255);

  //will be improved when adding functional
  ${(props) =>
    props.change === 'true' &&
    css`
      color: white;
      background-color: rgb(17, 107, 255);
      &:hover {
        background-color: white;
        color: rgb(17, 107, 255);
      }
    `}
`

export const IconItem = styled.p`
  font-size: ${(props) =>
    props.size === 'small' ? '10px' : props.size === 'large' ? '14px' : 'null'};
  line-height: 100%;
`
