import { Input, Text, IconModule } from '../../../../components'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleFormWrapper } from './CategorySimpleForm.style'
import { useSetCategory } from 'context/hook'

const CategorySimpleForm = (props) => {
  const { addCategory, onBlur, createCategory } = props
  const { category, AddCategory, isSetCategory } = useSetCategory(
    addCategory,
    createCategory
  )

  return (
    <CategorySimpleFormWrapper
      onKeyPress={(event) => AddCategory(event)}
      onBlur={onBlur}>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Input
        value={category}
        onChange={isSetCategory}
        color="blue"
        variant="input-isFilled"
        autoFocus
      />
      <Text className="mr-xl" variant="h6" color="gray">
        0
      </Text>
    </CategorySimpleFormWrapper>
  )
}

export default CategorySimpleForm
