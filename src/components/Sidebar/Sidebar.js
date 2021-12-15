import { SearchInput, Switcher } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button, Title } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { SwitcherWrapper, TitleWrapper, ButtonWrapper } from './Sidebar.style'
import {
  BsFillCalendarDateFill,
  BsWalletFill,
  BsFillFlagFill
} from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'

const Sidebar = () => {
  return (
    <>
      <SearchInput />
      <SwitcherWrapper>
        <Switcher color="blue" icon={<BsFillCalendarDateFill />}>
          Today
        </Switcher>
        <Switcher color="red" icon={<AiOutlineSchedule />}>
          Scheduled
        </Switcher>
      </SwitcherWrapper>
      <SwitcherWrapper>
        <Switcher color="gray" icon={<BsWalletFill />}>
          All
        </Switcher>
        <Switcher color="orange" icon={<BsFillFlagFill />}>
          Flagged
        </Switcher>
      </SwitcherWrapper>
      <TitleWrapper>
        <Title variant="h6" color="gray-darken">
          My lists
        </Title>
      </TitleWrapper>
      <CategoryList />
      <CategorySimpleForm />
      <ButtonWrapper>
        <Button
          size="md"
          color="light"
          variant="button-isBlanck"
          icon={<IoMdAddCircleOutline />}>
          Add List
        </Button>
      </ButtonWrapper>
    </>
  )
}

export default Sidebar
