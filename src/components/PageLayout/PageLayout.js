import { Header, Content } from './'
import { Row, Col, Container } from '..'

const PageLayout = () => {
  return (
    <Container variant="fluid">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Content />
        </Col>
      </Row>
    </Container>
  )
}

export default PageLayout
