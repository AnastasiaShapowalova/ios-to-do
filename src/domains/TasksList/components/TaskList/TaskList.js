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
        color="orange"
        shape="rounded"
        variant="button-isFilled"
      />
    </>
  )
}

export default TaskList
