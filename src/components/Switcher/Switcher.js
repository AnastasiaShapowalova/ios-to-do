import { Title, IconModule, Text } from '..'
import { HeadingWrapper, SwitcherStyled } from './Switcher.style'

const Switcher = (props) => {
  const { icon, color, children } = props

  return (
    <SwitcherStyled>
      <HeadingWrapper>
        <IconModule changeable icon={icon} color={color} />
        <Title variant="h5" color="gray-lighten">
          0
        </Title>
      </HeadingWrapper>
      <Text className="overflow-ellipsis" size="sm" color="gray-lighten">
        {children}
      </Text>
    </SwitcherStyled>
  )
}

export default Switcher
