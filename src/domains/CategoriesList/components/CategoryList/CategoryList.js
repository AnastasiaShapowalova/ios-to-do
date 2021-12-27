import { useStore } from 'context'
import { CategorySimpleView } from '..'

const CategoryList = () => {
  const { state, dispatch } = useStore()

  return (
    <>
      {state.categories?.map((el, index) => (
        <CategorySimpleView
          key={index}
          category={el.name}
          removeCategory={(name) =>
            dispatch({ type: 'removeCategory', name: name, id: el.id })
          }
          // editCategory={(name) =>
          //   dispatch({ type: 'editCategory', name: name, id: el.id })
          // }
        ></CategorySimpleView>
      ))}
    </>
  )
}

export default CategoryList
