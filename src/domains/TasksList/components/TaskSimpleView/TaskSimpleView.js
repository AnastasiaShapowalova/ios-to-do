import { Button, Text } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'

const TaskSimpleView = () => {
  return (
    //  Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime
    <>
      <input type="checkbox" />
      <Text variant="h4">Task Title</Text>
      <Button size="sm" color="dark" icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default TaskSimpleView
