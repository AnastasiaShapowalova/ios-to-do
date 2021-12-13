import { Button, Title } from '../../../'
import { IoAddOutline } from 'react-icons/io5'
import { Row, Col } from '../../../'

const Header = () => {
  return (
    <>
      <Row>
        <Col>
          <Button
            shape="rounded"
            variant="addTaskButton"
            size="lg"
            color="light"
            icon={<IoAddOutline />}
            hover></Button>
        </Col>
      </Row>
      <Row>
        <Col>
          <Title variant="h2">Header</Title>
        </Col>
        <Col>
          <Title variant="h3">1</Title>
        </Col>
      </Row>
    </>
  )
}

export default Header
