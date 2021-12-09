import styled from 'styled-components'

export const Txt = styled.p`
  margin: auto 0;
  font-size: ${(props) =>
    props.type === 'h1'
      ? 'var(--fs-h1)'
      : props.type === 'h2'
      ? 'var(--fs-h2)'
      : props.type === 'h3'
      ? 'var(--fs-h3)'
      : props.type === 'h4'
      ? 'var(--fs-h4)'
      : props.type === 'p'
      ? 'var(--fs-p)'
      : 'var(--fs-p)'};
  line-height: ${(props) =>
    props.type === 'h1'
      ? 'var(--lh-h1)'
      : props.type === 'h2'
      ? 'var(--lh-h2)'
      : props.type === 'h3'
      ? 'var(--lh-h3)'
      : props.type === 'h4'
      ? 'var(--lh-h4)'
      : props.type === 'p'
      ? 'var(--lh-p)'
      : 'var(--lh-p)'};
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
