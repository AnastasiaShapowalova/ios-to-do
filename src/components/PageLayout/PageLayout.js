import { Header, Content } from './'
import { Row, Col } from '..'

const PageLayout = () => {
  return (
    <>
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
    </>
  )
}

export default PageLayout
