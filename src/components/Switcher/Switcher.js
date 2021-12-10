import { Title, IconModule } from '..'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const Switcher = () => {
  return (
    <>
      <IconModule changeable icon={<AiOutlineUnorderedList />} />
      <Title variant="h5" fw="bold" color="gray">
        0
      </Title>
      <Title variant="h5" fw="bold" color="gray">
        Switcher
      </Title>
    </>
  )
}

export default Switcher
