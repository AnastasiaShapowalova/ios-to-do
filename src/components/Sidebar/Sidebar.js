import { Button, Title } from '../'
import { ButtonWrapper, SidebarWrapper, TitleWrapper } from './Sidebar.style'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Col, Row, SearchInput, SwitcherList } from '..'

import { IoMdAddCircleOutline } from 'react-icons/io'
import { createDocument } from 'services/firestore'
import { useState } from 'react'
import { useStore } from 'context/hook'

const Sidebar = () => {
  const { dispatch } = useStore()
  const [showInput, setShowInput] = useState(false)
  const show = () => {
    setShowInput(!showInput)
    return { showInput }
  }

  const createCategory = (category, categoryId) => {
    createDocument('category', categoryId, {
      id: categoryId,
      name: category
    })
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
          createCategory={createCategory}
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
