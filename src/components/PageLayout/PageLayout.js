import { Header, Content } from './'
import { Row, Col } from '..'
import { PageLayoutWrapper } from './PageLayout.style'
import { Title } from '..'

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
      <Row>
        <Col>
          <Title className="m-auto" variant="h3" color="gray-darken">
            No Remainders
          </Title>
        </Col>
      </Row>
    </PageLayoutWrapper>
  )
}

export default PageLayout
