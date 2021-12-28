import { PageLayout } from 'components'
import { Header, Content } from 'components/PageLayout'
import { useStore } from 'context'

const TasksAll = () => {
  const { selectedCategory } = useStore()
  console.log(selectedCategory)

  return (
    <>
      <PageLayout
        header={<Header title={selectedCategory} />}
        content={<Content selectedCategory={selectedCategory} />}
      />
    </>
  )
}

export default TasksAll
