import { CheckboxStyled, Label } from './Checkbox.style'

const Checkbox = (props) => {
  const { isChecked, color } = props

  return (
    <>
      <CheckboxStyled />
      <Label isChecked={isChecked} color={color} />
    </>
  )
}

export default Checkbox
