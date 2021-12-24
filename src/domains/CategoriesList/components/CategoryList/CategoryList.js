import { useStore } from 'context'
import { CategorySimpleView } from '..'

const CategoryList = () => {
  const { state } = useStore()

  return (
    <>
      {state.categories?.map((el, index) => (
        <CategorySimpleView key={index} category={el}></CategorySimpleView>
      ))}
    </>
  )
}

export default CategoryList
