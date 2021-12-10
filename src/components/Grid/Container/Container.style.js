import styled from 'styled-components'

export const ContainerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  margin: 0 auto;
  min-height: 100%;
  padding: 0 10px;

  @media (max-width: 100%) {
    .container {
      max-width: 100%;
    }
  }

  @media (max-width: 992px) {
    .container {
      max-width: 960px;
    }
  }

  @media (max-width: 768px) {
    .container {
      max-width: 720px;
    }
  }

  @media (max-width: 576px) {
    .container {
      max-width: 540px;
    }
  }

  @media (max-width: 576px) {
    .container {
      max-width: auto;
    }
  }
`
