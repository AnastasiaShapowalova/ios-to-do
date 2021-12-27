import { useState } from 'react'
import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleViewWrapper } from './CategorySimpleView.style'
import { CategorySimpleForm } from 'domains'

const CategorySimpleView = (props) => {
  const { category, removeCategory, editCategory } = props

  const [edited, isEdited] = useState(false)
  // const [name, setName] = useState(category.name)
  // const setEditedCategory = (e) => {
  //   setName(e.target.value)
  //   editCategory(name)
  // }

  return (
    <>
      {!edited ? (
        <CategorySimpleViewWrapper>
          <IconModule icon={<AiOutlineUnorderedList />} />
          <Text
            className="my-md overflow-ellipsis"
            size="md"
            onClick={() => isEdited(!edited)}>
            {category}
          </Text>
          <Text className="ml-auto" variant="h6" color="gray">
            {category.count}
          </Text>
          <Button
            onClick={removeCategory}
            size="md"
            color="gray-darken"
            variant="button-isBlanck"
            icon={<IoCloseOutline />}></Button>
        </CategorySimpleViewWrapper>
      ) : (
        <CategorySimpleForm
          // value={name}
          onBlur={() => isEdited(!edited)}
          // onChange={(e) => setEditedCategory(e.target.value)}
        />
      )}
    </>
  )
}

export default CategorySimpleView
