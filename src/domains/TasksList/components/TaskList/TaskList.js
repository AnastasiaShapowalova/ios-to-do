import { Button } from '../../../../components'
import { TaskSimpleView } from '..'
import { BsFlagFill } from 'react-icons/bs'

const TaskList = () => {
  return (
    // checbox, Title, flag, delete
    <>
      <TaskSimpleView />
      <Button
        icon={<BsFlagFill />}
        size="md"
        color="light"
        shape="rounded"
        variant="flagTaskButton"
      />
    </>
  )
}

export default TaskList
