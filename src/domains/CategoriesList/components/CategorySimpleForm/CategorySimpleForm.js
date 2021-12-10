import { Input, Text, IconModule } from '../../../../components'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { CategorySimpleFormWrapper } from './CategorySimpleForm.style'

const CategorySimpleForm = () => {
  return (
    <CategorySimpleFormWrapper>
      <IconModule icon={<AiOutlineUnorderedList />} size="sm" change="false" />
      <Input variant="categoryInput" />
      <Text size="md" color="lighten">
        0
      </Text>
    </CategorySimpleFormWrapper>
  )
}

export default CategorySimpleForm
