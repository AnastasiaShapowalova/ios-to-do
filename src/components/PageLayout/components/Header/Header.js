import { Button, Title } from '../../../'
import { IoAddOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <>
      <Title variant="title-body-2">Header</Title>
      <Title variant="title-body-3">1</Title>
      <Button
        shape
        size="lg"
        color="light"
        icon={<IoAddOutline />}
        hover></Button>
    </>
  )
}

export default Header
