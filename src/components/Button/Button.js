import { ButtonStyled, IconWrapper } from './Button.style'

const Button = (props) => {
  const { shape, color, children, size, hover, focus, icon, type, warning } =
    props

  return (
    <ButtonStyled
      shape={shape}
      color={color}
      size={size}
      type={type}
      hover={hover}
      focus={focus}
      icon={icon}
      warning={warning}>
      {icon && children ? (
        <>
          <IconWrapper>{icon}</IconWrapper>
          {children}
        </>
      ) : icon ? (
        icon
      ) : children ? (
        children
      ) : null}
    </ButtonStyled>
  )
}

export default Button
