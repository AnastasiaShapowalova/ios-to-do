import { SearchInput, Switcher } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { SwitcherWrapper } from './Sidebar.style'

const Sidebar = () => {
  return (
    <>
      <SearchInput />
      <SwitcherWrapper>
        <Switcher />
        <Switcher />
      </SwitcherWrapper>

      <SwitcherWrapper>
        <Switcher />
        <Switcher />
      </SwitcherWrapper>

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
