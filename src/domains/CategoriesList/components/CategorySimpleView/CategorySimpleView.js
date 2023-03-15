import { Button, IconModule, Input, Text } from '../../../../components'
import {
  CategorySimpleViewWrapper,
  FormWrapper
} from './CategorySimpleView.style'

import { AiOutlineUnorderedList } from 'react-icons/ai'
import { IoCloseOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { updateDocument } from 'services/firestore'
import { useState } from 'react'
import { useStore } from 'context'

const CategorySimpleView = (props) => {
  const { category, removeCategory, editCategory, count } = props

  const [edited, isEdited] = useState(false)
  const { setSelectedCategory } = useStore()

  let updateTask = (editedCategoryId, categoryId) => {
    updateDocument('category', categoryId, {
      id: categoryId,
      name: editedCategoryId
    })
  }

  const setEdit = () => {
    isEdited(!edited)
    updateTask(category.name, category.id)
  }

  return (
    <>
      <Link to={'/'}>
        {!edited ? (
          <CategorySimpleViewWrapper
            onDoubleClick={() => setSelectedCategory(category.name)}>
            <IconModule icon={<AiOutlineUnorderedList />} />
            <Text
              className="my-md overflow-ellipsis"
              size="md"
              onClick={() => isEdited(!edited)}>
              {category.name}
            </Text>
            <Text className="ml-auto" variant="h6" color="gray">
              {count || 0}
            </Text>
            <Button
              onClick={removeCategory}
              size="md"
              color="gray-darken"
              variant="button-isBlanck"
              icon={<IoCloseOutline />}></Button>
          </CategorySimpleViewWrapper>
        ) : (
          <FormWrapper>
            <IconModule icon={<AiOutlineUnorderedList />} />
            <Input
              variant="input-isFilled"
              value={category?.name}
              onChange={(e) => editCategory(e.target.value)}
              onBlur={() => {
                setEdit()
              }}
              autoFocus
            />
          </FormWrapper>
        )}
      </Link>
    </>
  )
}

export default CategorySimpleView
