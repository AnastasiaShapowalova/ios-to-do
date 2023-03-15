import { Content, Header } from 'components/PageLayout'

import { PageLayout } from 'components'
import { useStore } from 'context'

const TasksAll = () => {
  const { selectedCategory } = useStore()

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
