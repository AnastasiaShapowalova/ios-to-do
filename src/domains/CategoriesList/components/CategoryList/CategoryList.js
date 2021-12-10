import { CategorySimpleView } from '..'
import { Title } from '../../../../components'

const CategoryList = () => {
  return (
    <>
      <Title variant="h6" color="gray-darken">
        My lists
      </Title>
      <CategorySimpleView />
    </>
  )
}

export default CategoryList
