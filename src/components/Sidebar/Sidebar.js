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
      <Row>
        <Col>
          <Switcher color="blue" icon={<BsFillCalendarDateFill />}>
            Today
          </Switcher>
        </Col>
        <Col>
          <Switcher color="red" icon={<AiOutlineSchedule />}>
            Scheduled
          </Switcher>
        </Col>
      </Row>
      <Row>
        <Col>
          <Switcher color="gray" icon={<BsWalletFill />}>
            All
          </Switcher>
        </Col>
        <Col>
          <Switcher color="orange" icon={<BsFillFlagFill />}>
            Flagged
          </Switcher>
        </Col>
      </Row>
      <TitleWrapper>
        <Title variant="h6" color="gray">
          My lists
        </Title>
      </TitleWrapper>
      <CategoryList />
      {showInput === true && (
        <CategorySimpleForm
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
