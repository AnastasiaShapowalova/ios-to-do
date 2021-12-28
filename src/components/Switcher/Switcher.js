import { Title, IconModule, Text } from '..'
import { HeadingWrapper, SwitcherStyled } from './Switcher.style'

const Switcher = (props) => {
  const { icon, color, name, onClick } = props

  return (
    <SwitcherStyled data-textId="Switcher" onClick={onClick}>
      <HeadingWrapper>
        <IconModule changeable icon={icon} color={color} />
        <Title variant="h5" color="gray-lighten">
          0
        </Title>
      </HeadingWrapper>
      <Text className="overflow-ellipsis" size="sm" color="gray-lighten">
        {name}
      </Text>
    </SwitcherStyled>
  )
}

export default Switcher
