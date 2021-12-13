import { Row, SearchInput, Switcher, Col } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Sidebar = () => {
  return (
    <>
      <SearchInput />
      <Switcher />
      <Switcher />
      <Switcher />
      <Switcher />
      <CategoryList />
      <CategorySimpleForm />
      <Button
        size="md"
        color="light"
        variant="button-isBlanck"
        icon={<IoMdAddCircleOutline />}>
        Add List
      </Button>
    </>
  )
}

export default Sidebar
