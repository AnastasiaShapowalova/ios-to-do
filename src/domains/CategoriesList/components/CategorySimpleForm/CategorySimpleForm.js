import { Input, Text, IconModule } from '../../../../components'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleFormWrapper } from './CategorySimpleForm.style'

const CategorySimpleForm = () => {
  return (
    <CategorySimpleFormWrapper>
      <IconModule icon={<AiOutlineUnorderedList />} />
      <Input color="blue" variant="input-isFilled" />
      <Text size="md" color="lighten">
        0
      </Text>
    </CategorySimpleFormWrapper>
  )
}

export default CategorySimpleForm
