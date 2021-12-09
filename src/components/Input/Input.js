import { InputStyled } from './Input.style'

const Input = (props) => {
  const { placeholder, variant } = props
  return <InputStyled variant={variant} placeholder={placeholder} />
}

export default Input
