import AppLayout from '../../components/AppLayout/AppLayout'
import { TasksAll } from '../'
import { Sidebar } from '../../components'

const Navigator = () => {
  return (
    <AppLayout
      data-text-id="Navigator"
      className="AppLayout"
      left={<Sidebar />}
      right={<TasksAll />}
    />
  )
}

export default Navigator
