import { ContainerWrapper } from './Container.style'

const Container = (props) => {
  const { children } = props
  return <ContainerWrapper>{children}</ContainerWrapper>
}

export default Container
