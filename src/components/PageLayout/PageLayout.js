import { Header, Content } from './'
import { Row, Col } from '..'
import { PageLayoutWrapper } from './PageLayout.style'

const PageLayout = () => {
  return (
    <PageLayoutWrapper className="height-100">
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
    </PageLayoutWrapper>
  )
}

export default PageLayout
