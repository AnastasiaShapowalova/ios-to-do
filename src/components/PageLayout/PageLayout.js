import { useReducer } from 'react'
import { Header, Content } from './'
import { Row, Col } from '..'
import { PageLayoutWrapper } from './PageLayout.style'
import { initialState, reducer } from '../../contexts/reducer/reducer'

const PageLayout = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <PageLayoutWrapper className="height-100">
      <Row>
        <Col>
          <Header state={state} />
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
