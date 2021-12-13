import { Title, IconModule, Text } from '..'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { SwitcherWrapper, HeadingWrapper } from './Switcher.style'

const Switcher = () => {
  return (
    <SwitcherWrapper>
      <HeadingWrapper>
        <IconModule changeable icon={<AiOutlineUnorderedList />} />
        <Title variant="h5" color="gray-lighten">
          0
        </Title>
      </HeadingWrapper>
      <Text size="sm" color="gray-lighten">
        Switcher
      </Text>
    </SwitcherWrapper>
  )
}

export default Switcher
