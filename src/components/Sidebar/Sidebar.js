import { Row, SearchInput, Switcher, Col, Container } from '..'
import { CategoryList, CategorySimpleForm } from '../../domains'
import { Button } from '../'
import { IoMdAddCircleOutline } from 'react-icons/io'

const Sidebar = () => {
  return (
    <Container variant="sm">
      <SearchInput />
      <Row>
        <Col>
          <Switcher />
          <Switcher />
        </Col>
        <Col>
          <Switcher />
          <Switcher />
        </Col>
      </Row>
      <CategoryList />
      <CategorySimpleForm />
      <Button
        size="md"
        color="light"
        variant="button-isBlanck"
        icon={<IoMdAddCircleOutline />}>
        Add List
      </Button>
    </Container>
  )
}

export default Sidebar
