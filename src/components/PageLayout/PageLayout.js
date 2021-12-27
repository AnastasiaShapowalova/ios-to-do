import { useState } from 'react'
import { Header, Content } from './'
import { Row, Col } from '..'
import { PageLayoutWrapper } from './PageLayout.style'
import { useStore } from 'context'

const PageLayout = () => {
  const [showForm, setShowForm] = useState(false)
  const { dispatch } = useStore()
  const addTask = (task) => dispatch({ type: 'addTask', task: task })

  return (
    <PageLayoutWrapper
      className="height-100"
      onClick={() => {
        setShowForm(true)
      }}>
      <Row>
        <Col>
          <Header />
        </Col>
      </Row>
      <Row>
        <Col>
          <Content showForm={showForm} addTask={addTask} />
        </Col>
      </Row>
    </PageLayoutWrapper>
  )
}

export default PageLayout
