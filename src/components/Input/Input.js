import { InputStyled } from './Input.style'

const Input = (props) => {
  const {
    placeholder,
    variant,
    type,
    value,
    onChange,
    onClick,
    className,
    autoFocus,
    onBlur
  } = props
  return (
    <InputStyled
      onBlur={onBlur}
      autoFocus={autoFocus}
      variant={variant}
      placeholder={placeholder}
      type={type}
      onChange={onChange}
      value={value}
      onClick={onClick}
      className={className}
    />
  )
}

export default Input
