import { TextStyled } from './Text.style'

const Text = (props) => {
  const { children, size, color, ...rest } = props
  return (
    <TextStyled {...rest} size={size} color={color}>
      {children}
    </TextStyled>
  )
}

export default Text
