import { InputStyled } from './Input.style'

const Input = (props) => {
  const { placeholder, variant, type } = props
  return <InputStyled variant={variant} placeholder={placeholder} type={type} />
}

export default Input
