import { ContainerWrapper } from './Container.style'

const Container = (props) => {
  const { children, variant, className } = props
  return (
    <ContainerWrapper
      variant={variant}
      className={className}
      data-textid="container">
      {children}
    </ContainerWrapper>
  )
}

export default Container
