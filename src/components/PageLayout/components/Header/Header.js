import { Button, Title } from '../../../'
import { IoAddOutline } from 'react-icons/io5'

const Header = () => {
  return (
    <>
      <Title variant="h2">Header</Title>
      <Title variant="h3">1</Title>
      <Button
        shape="rounded"
        variant="addTaskButton"
        size="lg"
        color="light"
        icon={<IoAddOutline />}
        hover></Button>
    </>
  )
}

export default Header
