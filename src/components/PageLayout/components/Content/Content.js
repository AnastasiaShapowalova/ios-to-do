import { Title } from '../../..'
import { TaskList, TaskSimpleForm } from '../../../../domains'

const Content = () => {
  return (
    <>
      <TaskList />
      <TaskSimpleForm />
      <Title variant="h3" color="gray-darken">
        No Remainders
      </Title>
      {/* Title,flag, checkbox, createdAt, EditedAt, delete, dueDataTime  */}
      {/* Checkbox, Input, flag, dueDataTime */}
      {/* no remaindners  */}
    </>
  )
}

export default Content
