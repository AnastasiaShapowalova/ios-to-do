import { Button } from '../../../../components'
import { TaskSimpleView } from '..'
import { BsFlag } from 'react-icons/bs'

const TaskList = () => {
  return (
    // checbox, Title, flag, delete
    <>
      <TaskSimpleView />
      <Button
        icon={<BsFlag />}
        type="fill"
        size="small"
        color="light"
        warning="warning"
        shape
      />
    </>
  )
}

export default TaskList
