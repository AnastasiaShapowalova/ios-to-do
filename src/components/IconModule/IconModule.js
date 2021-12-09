import { IconWrapper } from './IconModule.style'

const IconModule = (props) => {
  const { icon, variant, color } = props
  return (
    <IconWrapper variant={variant} color={color}>
      {icon}
    </IconWrapper>
  )
}

export default IconModule
