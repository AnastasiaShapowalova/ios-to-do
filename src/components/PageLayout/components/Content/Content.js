import { Col, Row } from '../../..'
import { TaskList, TaskSimpleForm } from '../../../../domains'

import { createDocument } from 'services/firestore'
import { useStore } from 'context/hook'

const Content = ({ selectedCategory }) => {
  const { dispatch, showForm, newTask } = useStore()

  const addTask = (task) =>
    dispatch({ type: 'addTask', task: task, categotyName: selectedCategory })

  const createTask = (task, taskId, categotyName) => {
    createDocument(
      'tasks',
      {
        id: taskId,
        task: task,
        categotyName: categotyName || 'No category'
      },
      taskId
    )
  }
  return (
    <>
      <Row>
        <Col>
          <TaskList tasks={newTask} dispatch={dispatch} />
        </Col>
      </Row>
      {showForm && (
        <Row>
          <Col>
            <TaskSimpleForm addTask={addTask} createTask={createTask} />
          </Col>
        </Row>
      )}
    </>
  )
}

export default Content
