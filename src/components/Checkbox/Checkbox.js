import { CheckboxStyled, CheckboxWrapper } from './Checkbox.style'

const Checkbox = (props) => {
  const { color, onClick } = props

  return (
    <CheckboxWrapper data-testid="checkbox" onClick={onClick}>
      <CheckboxStyled color={color || 'blue'} />
    </CheckboxWrapper>
  )
}

export default Checkbox
