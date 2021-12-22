import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { useStore } from 'contexts/hooks'

const Content = () => {
  const { dispatch } = useStore()

  return (
    <>
      <Row>
        <Col>
          <TaskList />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskSimpleForm
          // add={(task) => dispatch({ type: 'add', task: task })}
          />
        </Col>
      </Row>
    </>
  )
}

export default Content
