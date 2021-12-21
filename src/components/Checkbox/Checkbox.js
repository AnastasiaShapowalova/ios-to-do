import { CheckboxStyled, CheckboxWrapper } from './Checkbox.style'

const Checkbox = (props) => {
  const { color } = props

  return (
    <CheckboxWrapper data-testid="checkbox">
      <CheckboxStyled color={color || 'blue'} />
    </CheckboxWrapper>
  )
}

export default Checkbox
