import { Button, Col, Row, Text, Checkbox, Input } from 'components'
import { IoCloseOutline } from 'react-icons/io5'
import { TaskWrapper } from './TaskSimpleView.style'
import { BsFlagFill } from 'react-icons/bs'
import { useSetEditTask, useIsEditable } from 'contexts/hooks'

const TaskSimpleView = (props) => {
  const { todo, remove } = props
  const { editTask, setEditedTask } = useSetEditTask(todo)
  const { editable, isEditable } = useIsEditable()

  return (
    <>
      {!editable ? (
        <Row>
          <Col className="direction-row">
            <Checkbox color="green" />
            <TaskWrapper className="display-flex">
              <Text
                className="flex-basis pb-xs"
                size="md"
                onClick={() => isEditable(!editable)}>
                {todo.task}
              </Text>
              <Button
                onClick={remove}
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
                onSubmit={() => isEditable(!editable)}
                className="pb-xs"
                value={editTask}
                onChange={(e) => setEditedTask(e)}
                onBlur={() => isEditable(!editable)}
                autoFocus
              />
              <Button
                onClick={remove}
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
