import styled from 'styled-components'

export const Txt = styled.p`
  font-size: ${(props) =>
    props.type === 'h1'
      ? '32px'
      : props.type === 'h2'
      ? '24px'
      : props.type === 'h3'
      ? '18px'
      : props.type === 'h4'
      ? '14px'
      : props.type === 'p'
      ? '12px'
      : 'null'};
  color: ${(props) =>
    props.color === 'darken'
      ? 'rgb(95, 95, 95)'
      : props.color === 'dark'
      ? 'rgb(110, 114, 120)'
      : props.color === 'lighten'
      ? 'rgb(218, 225, 231)'
      : 'rgb(255, 255, 255)'};
  font-weight: ${(props) =>
    props.fw === 'unset'
      ? 'unset'
      : props.fw === 'normal'
      ? 'normal'
      : props.fw === 'bold'
      ? 'bold'
      : 'normal'};
`
