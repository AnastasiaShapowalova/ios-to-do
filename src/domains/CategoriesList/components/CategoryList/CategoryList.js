import { CategorySimpleView } from '..'
import { deleteDocument } from 'services/firestore'
import { useStore } from 'context'

const CategoryList = () => {
  const { state, dispatch } = useStore()

  return (
    <>
      {state.categories?.map((el, index) => (
        <CategorySimpleView
          key={index}
          category={el}
          removeCategory={(name) => {
            dispatch({ type: 'removeCategory', name: name, id: el.id })
            deleteDocument('category', el.id)
          }}
          editCategory={(name) =>
            dispatch({ type: 'editCategory', name: name, id: el.id })
          }></CategorySimpleView>
      ))}
    </>
  )
}

export default CategoryList
