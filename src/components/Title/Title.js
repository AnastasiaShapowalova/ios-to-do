import { TitleStyled } from './Title.style'

const Title = (props) => {
  const { children, color, variant } = props
  return (
    <TitleStyled color={color} variant={variant}>
      {children}
    </TitleStyled>
  )
}

export default Title
