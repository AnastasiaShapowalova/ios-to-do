import { useState, useEffect } from 'react'
import { Button, Text, IconModule, Input } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import {
  FormWrapper,
  CategorySimpleViewWrapper
} from './CategorySimpleView.style'
import { Link } from 'react-router-dom'
import { useStore } from 'context'

const CategorySimpleView = (props) => {
  const { category, removeCategory, editCategory, count } = props

  const [edited, isEdited] = useState(false)
  const { setSelectedCategory } = useStore()
  // const [focused, setFocused] = useState(false)

  // useEffect(() => {
  //   setFocused(
  //     state?.currentCategory &&
  //       category.id === state?.currentCategory?.category.id
  //       ? true
  //       : false
  //   )
  // }, [category.id, state?.currentCategory])

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
                isEdited(!edited)
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
