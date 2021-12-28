import { useState } from 'react'
import { Col, Row, SearchInput, SwitcherList } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button, Title } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'
import { TitleWrapper, ButtonWrapper, SidebarWrapper } from './Sidebar.style'
import { useStore } from 'context/hook'
import firestoreService from 'services/firestoreService'

const Sidebar = () => {
  const { dispatch } = useStore()
  const [showInput, setShowInput] = useState(false)
  const show = () => {
    setShowInput(!showInput)
    return { showInput }
  }

  const createCategory = (category, categoryId) => {
    firestoreService.createDocument('category', categoryId, {
      id: categoryId,
      name: category
    })

    // setCategoryName('')
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
