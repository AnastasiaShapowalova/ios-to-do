import { Header, Content } from './'
import { Row, Col } from '..'
import { PageLayoutWrapper } from './PageLayout.style'
import { useStore } from 'contexts/hooks'

const PageLayout = () => {
  const { state, dispatch } = useStore()

  return (
    <PageLayoutWrapper className="height-100">
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Content state={state} dispatch={dispatch} />
        </Col>
      </Row>
    </PageLayoutWrapper>
  )
}

export default PageLayout
