import { useState } from 'react'
import { Button, Col, Row, Text, Checkbox, Input } from 'components'
import { IoCloseOutline } from 'react-icons/io5'
import { TaskWrapper } from './TaskSimpleView.style'
import { BsFlagFill } from 'react-icons/bs'

const TaskSimpleView = (props) => {
  const { todo, removeTask, editTask } = props

  const [editable, isEditable] = useState(false)
  const [checked, setChecked] = useState(false)

  return (
    <>
      {!editable ? (
        <Row>
          <Col className="direction-row">
            <Checkbox color="green" onClick={() => setChecked(!checked)} />
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
                onBlur={() => {
                  isEditable(!editable)
                }}
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
