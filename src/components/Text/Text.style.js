import styled from 'styled-components'

export const Txt = styled.p`
  margin: auto 0;
  font-size: ${(props) =>
    props.type === 'h1'
      ? 'var(--h1)'
      : props.type === 'h2'
      ? 'var(--h2)'
      : props.type === 'h3'
      ? 'var(--h3)'
      : props.type === 'h4'
      ? 'var(--h4)'
      : props.type === 'p'
      ? 'var(--p)'
      : 'var(--p)'};
  line-height: ${(props) =>
    props.type === 'h1'
      ? 'var(--h1)'
      : props.type === 'h2'
      ? 'var(--h2)'
      : props.type === 'h3'
      ? 'var(--h3)'
      : props.type === 'h4'
      ? 'var(--h4)'
      : props.type === 'p'
      ? 'var(--p)'
      : 'var(--p)'};
  color: ${(props) =>
    props.color === 'darken'
      ? 'var(--gray-darken1)'
      : props.color === 'dark'
      ? 'var(--gray-default)'
      : props.color === 'lighten'
      ? 'var(--gray-lighten3)'
      : 'var(--white)'};
  font-weight: ${(props) =>
    props.fw === 'unset'
      ? 'var(--fw-unset)'
      : props.fw === 'normal'
      ? 'var(--fw-normal)'
      : props.fw === 'bold'
      ? 'var(--fw-bold)'
      : 'var(--fw-normal)'};
`
