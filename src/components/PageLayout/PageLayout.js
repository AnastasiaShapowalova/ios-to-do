import { Row, Col } from '..'
import { PageLayoutWrapper } from './PageLayout.style'
import { useStore } from 'context/hook'

const PageLayout = ({ header, content }) => {
  const { setShowForm } = useStore()

  return (
    <PageLayoutWrapper
      className="height-100"
      onClick={() => {
        setShowForm(true)
      }}>
      <Row>
        <Col>{header}</Col>
      </Row>
      <Row>
        <Col>{content}</Col>
      </Row>
    </PageLayoutWrapper>
  )
}

export default PageLayout
