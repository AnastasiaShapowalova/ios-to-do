import { PageLayout } from 'components'
import { Header, Content } from 'components/PageLayout'
import { useStore } from 'context'

const TasksAll = () => {
  const { selectedCategory } = useStore()

  return (
    <>
      <PageLayout
        header={<Header title={selectedCategory} />}
        content={<Content />}
      />
    </>
  )
}

export default TasksAll
