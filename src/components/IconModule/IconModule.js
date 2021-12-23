import { IconWrapper } from './IconModule.style'

const IconModule = (props) => {
  const { icon, color, changeable } = props
  return (
    <IconWrapper color={color || 'blue'} changeable={changeable}>
      {icon}
    </IconWrapper>
  )
}

export default IconModule
