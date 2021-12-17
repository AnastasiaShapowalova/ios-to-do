import { Button, Title, Text } from '../../../'
import { IoAddOutline } from 'react-icons/io5'
import { Row, Col } from '../../../'
import { PositionWrapper, TitleWrapper } from './Header.styled'

const Header = () => {
  return (
    <>
      <Row>
        <Col>
          <PositionWrapper>
            <Button
              shape="rounded"
              variant="addTaskButton"
              size="lg"
              color="light"
              icon={<IoAddOutline />}
              hover></Button>
          </PositionWrapper>
        </Col>
      </Row>
      <Row>
        <Col col="11">
          <Title variant="h2">Header</Title>
        </Col>
        <Col col="1">
          <PositionWrapper className="mr-sm">
            <Title variant="h3">2</Title>
          </PositionWrapper>
        </Col>
      </Row>
      <TitleWrapper>
        <Row>
          <Col col="2" className="direction-row">
            <Text color="gray-lighten">0 completed •</Text>
            <Button variant="button-isBlanck" color="gray">
              Clear
            </Button>
          </Col>
          <Col>
            <PositionWrapper className="mr-sm">
              <Button variant="button-isBlanck" color="gray">
                Show
              </Button>
            </PositionWrapper>
          </Col>
        </Row>
      </TitleWrapper>
    </>
  )
}

export default Header
