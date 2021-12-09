import { Title, IconModule } from '..'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const Switcher = () => {
  return (
    <>
      <IconModule icon={<AiOutlineUnorderedList />} size="lg" change="true" />
      <Title variant="title-caption-1" fw="bold" color="dark">
        0
      </Title>
      <Title variant="title-caption-1" fw="bold" color="dark">
        Switcher
      </Title>
    </>
  )
}

export default Switcher
