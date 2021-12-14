import { Title, IconModule, Text } from '..'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { HeadingWrapper, SwitcherStyled } from './Switcher.style'

const Switcher = () => {
  return (
    <SwitcherStyled>
      <HeadingWrapper>
        <IconModule changeable icon={<AiOutlineUnorderedList />} />
        <Title variant="h5" color="gray-lighten">
          0
        </Title>
      </HeadingWrapper>
      <Text size="sm" color="gray-lighten">
        Switcher
      </Text>
    </SwitcherStyled>
  )
}

export default Switcher
