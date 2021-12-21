import { TextStyled } from './Text.style'

const Text = (props) => {
  const { onClick, children, size, color, ...rest } = props
  return (
    <TextStyled {...rest} size={size} color={color} onClick={onClick}>
      {children}
    </TextStyled>
  )
}

export default Text
