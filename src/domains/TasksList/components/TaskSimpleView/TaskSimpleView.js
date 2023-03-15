import { Button, Checkbox, Col, Input, Row, Text } from 'components'

import { BsFlagFill } from 'react-icons/bs'
import { IoCloseOutline } from 'react-icons/io5'
import { TaskWrapper } from './TaskSimpleView.style'
import { updateDocument } from 'services/firestore'
import { useState } from 'react'

const TaskSimpleView = (props) => {
  const { todo, removeTask, editTask } = props
  const [editable, isEditable] = useState(false)

  let updateTask = (editedTask, taskId) => {
    updateDocument('task', taskId, {
      id: taskId,
      task: editedTask
    })
  }

  const setEdit = () => {
    isEditable(!editable)
    updateTask(todo.task, todo.id)
  }

  return (
    <>
      {!editable ? (
        <Row>
          <Col className="direction-row">
            <Checkbox color="green" s />
            <TaskWrapper className="display-flex">
              <Text
                className="flex-basis pb-xs"
                size="md"
                onClick={() => isEditable(!editable)}>
                {todo.task}
              </Text>
              <Button
                onClick={removeTask}
                variant="button-isBlanck"
                size="md"
                color="gray-darken"
                icon={<IoCloseOutline />}></Button>
              <Button
                icon={<BsFlagFill />}
                size="md"
                color="orange"
                shape="rounded"
                variant="button-isFilled"
              />
            </TaskWrapper>
          </Col>
        </Row>
      ) : (
        <Row>
          <Col className="direction-row">
            <Checkbox color="green" />
            <TaskWrapper className="display-flex">
              <Input
                className="pb-xs"
                value={todo?.task}
                onChange={(e) => editTask(e.target.value)}
                onBlur={() => setEdit()}
                autoFocus
              />
              <Button
                onClick={removeTask}
                variant="button-isBlanck"
                size="md"
                color="gray-darken"
                icon={<IoCloseOutline />}></Button>
              <Button
                icon={<BsFlagFill />}
                size="md"
                color="orange"
                shape="rounded"
                variant="button-isFilled"
              />
            </TaskWrapper>
          </Col>
        </Row>
      )}
    </>
  )
}

export default TaskSimpleView
