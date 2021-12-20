import { useReducer } from 'react'
import { TaskList, TaskSimpleForm } from '../../../../domains'
import { Row, Col } from '../../..'
import { initialState, reducer } from '../../../../contexts/reducer/reducer'

const Content = (props) => {
  const { state, dispatch } = props
  // const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <>
      <Row>
        <Col>
          <TaskList state={state} dispatch={dispatch} />
        </Col>
      </Row>
      <Row>
        <Col>
          <TaskSimpleForm
            add={(task) => dispatch({ type: 'add', task: task })}
          />
        </Col>
      </Row>
    </>
  )
}

export default Content
