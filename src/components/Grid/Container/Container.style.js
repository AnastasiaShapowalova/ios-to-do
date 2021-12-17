import styled from 'styled-components'
import { css } from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: var(--m-0) var(--m-auto);
  height: inherit;
  padding: var(--p-0);
  box-sizing: border-box;

  @media (min-width: 576px) {
    max-width: 540px;
  }
  @media (min-width: 768px) {
    max-width: 720px;
  }
  @media (min-width: 992px) {
    max-width: 960px;
  }
  @media (min-width: 1200px) {
    max-width: 1140px;
  }
  @media (min-width: 1400px) {
    max-width: 1320px;
  }

  ${(props) =>
    props.variant === 'sm' &&
    css`
      @media (min-width: 576px) {
        max-width: 540px;
      }
    `}

  ${(props) =>
    props.variant === 'md' &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 768px) {
        max-width: 720px;
      }
    `}

		${(props) =>
    props.variant === 'lg' &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 768px) {
        max-width: 100%;
      }
      @media (min-width: 992px) {
        max-width: 960px;
      }
    `}

		${(props) =>
    props.variant === 'xl' &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 768px) {
        max-width: 100%;
      }
      @media (min-width: 992px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 1140px;
      }
    `}

		${(props) =>
    props.variant === 'xxl' &&
    css`
      @media (min-width: 576px) {
        max-width: 100%;
      }
      @media (min-width: 768px) {
        max-width: 100%;
      }
      @media (min-width: 992px) {
        max-width: 100%;
      }
      @media (min-width: 1200px) {
        max-width: 100%;
      }
      @media (min-width: 1400px) {
        max-width: 1320px;
      }
    `}

		${(props) =>
    props.variant === 'fluid' &&
    css`
      min-width: 100%;
    `}
`
