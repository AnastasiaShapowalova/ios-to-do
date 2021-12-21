import { TitleStyled } from './Title.style'

const Title = (props) => {
  const { children, color, variant, className } = props
  return (
    <TitleStyled color={color} variant={variant} className={className}>
      {children}
    </TitleStyled>
  )
}

export default Title
