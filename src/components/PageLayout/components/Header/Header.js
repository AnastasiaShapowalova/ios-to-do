import { Button, Title } from '../../../'
import { IoAddOutline } from 'react-icons/io5'
import { Row, Col } from '../../../'

const Header = () => {
  return (
    <>
      <Row>
        <Col>
          <div>
            <Button
              shape="rounded"
              variant="addTaskButton"
              size="lg"
              color="light"
              icon={<IoAddOutline />}
              hover></Button>
          </div>
        </Col>
      </Row>
      <Row>
        <Col col="11">
          <Title variant="h2">Header</Title>
        </Col>
        <Col col="1">
          <Title variant="h3">1</Title>
        </Col>
      </Row>
    </>
  )
}

export default Header
