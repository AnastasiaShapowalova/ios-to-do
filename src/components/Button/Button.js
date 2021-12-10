import { ButtonStyled, IconWrapper } from './Button.style'

const Button = (props) => {
  const { shape, color, children, size, icon, variant } = props

  return (
    <>
      {icon && children ? (
        <ButtonStyled shape={shape} color={color} size={size} variant={variant}>
          <IconWrapper>{icon}</IconWrapper>
          {children}
        </ButtonStyled>
      ) : (
        <ButtonStyled shape={shape} color={color} size={size} variant={variant}>
          {icon || children}
        </ButtonStyled>
      )}
    </>
  )
}

export default Button
