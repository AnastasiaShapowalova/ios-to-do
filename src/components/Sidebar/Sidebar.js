import { useState } from 'react'
import { Col, Row, SearchInput, Switcher } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button, Title } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { TitleWrapper, ButtonWrapper, SidebarWrapper } from './Sidebar.style'
import {
  BsFillCalendarDateFill,
  BsWalletFill,
  BsFillFlagFill
} from 'react-icons/bs'
import { AiOutlineSchedule } from 'react-icons/ai'
import { useStore } from 'context/hook'
import { IoToday } from 'react-icons/io5'
import { SwitcherList } from 'components'

const Sidebar = () => {
  const { dispatch } = useStore()

  const [showInput, setShowInput] = useState(false)
  const show = () => {
    setShowInput(!showInput)
    return { showInput }
  }
  return (
    <SidebarWrapper>
      <Row>
        <Col>
          <SearchInput />
        </Col>
      </Row>
      <SwitcherList />

      <TitleWrapper>
        <Title variant="h6" color="gray">
          My lists
        </Title>
      </TitleWrapper>
      <CategoryList />
      {showInput === true && (
        <CategorySimpleForm
          onBlur={() => setShowInput(!showInput)}
          addCategory={(category) =>
            dispatch({ type: 'addCategory', category: category })
          }
        />
      )}
      <ButtonWrapper>
        <Button
          onClick={show}
          size="md"
          color="light"
          variant="button-isBlanck"
          icon={<IoMdAddCircleOutline />}>
          Add List
        </Button>
      </ButtonWrapper>
    </SidebarWrapper>
  )
}

export default Sidebar
