import { TextStyled } from './Text.style'

const Text = (props) => {
  const { children, size, color } = props
  return (
    <TextStyled size={size} color={color}>
      {children}
    </TextStyled>
  )
}

export default Text
