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
    autoFocus
  } = props
  return (
    <InputStyled
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
