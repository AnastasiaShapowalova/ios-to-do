import styled from 'styled-components'
import { css } from 'styled-components'

export const TitleStyled = styled.div`
  margin: auto 0;
  color: white;
  font-size: var(--fs-h1);
  line-height: var(--lh-h1);

  ${(props) =>
    props.variant === 'title-body-1' &&
    css`
      font-size: var(--fs-h1);
      line-height: var(--lh-h1);
    `}
  ${(props) =>
    props.variant === 'title-body-2' &&
    css`
      font-weight: var(--font-weight-bold);
      font-size: var(--fs-h2);
      line-height: var(--lh-h2);
    `}
	${(props) =>
    props.variant === 'title-body-3' &&
    css`
      font-size: var(--fs-h3);
      line-height: var(--lh-h3);
      font-weight: var(--font-weight-normal);
    `}
	${(props) =>
    props.variant === 'title-body-4' &&
    css`
      font-size: var(--fs-h4);
      line-height: var(--lh-h4);
      font-weight: var(--font-weight-bold);
    `}
	${(props) =>
    props.variant === 'title-caption-1' &&
    css`
      font-size: var(--fs-h5);
      line-height: var(--lh-h5);
      font-weight: var(--font-weight-normal);
    `}
	${(props) =>
    props.variant === 'title-caption-2' &&
    css`
      font-size: var(--fs-h6);
      line-height: var(--lh-h6);
      font-weight: var(--font-weight-normal);
    `}

	${(props) =>
    props.color === 'darken' &&
    css`
      color: var(--gray-darken2);
    `}
	${(props) =>
    props.color === 'dark' &&
    css`
      color: var(--gray);
    `}
	${(props) =>
    props.color === 'lighten' &&
    css`
      color: var(--gray-lighten2);
    `}
`
