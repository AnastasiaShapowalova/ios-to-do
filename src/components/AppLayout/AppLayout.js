import { Row, Container, Col } from '..'

const AppLayout = ({ left, right }) => {
  return (
    <>
      <Container variant="fluid" className="height-100">
        <Row className="height-100">
          <Col col="2" className="height-100">
            {left}
          </Col>
          <Col col="10">{right}</Col>
        </Row>
      </Container>
    </>
  )
}

export default AppLayout
