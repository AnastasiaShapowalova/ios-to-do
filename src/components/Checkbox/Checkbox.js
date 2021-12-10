import { CheckboxStyled, Label, CheckboxWrapper } from './Checkbox.style'

const Checkbox = (props) => {
  const { isChecked, color } = props

  return (
    <CheckboxWrapper>
      <CheckboxStyled />
      <Label isChecked={isChecked} color={color || 'blue'} />
    </CheckboxWrapper>
  )
}

export default Checkbox
