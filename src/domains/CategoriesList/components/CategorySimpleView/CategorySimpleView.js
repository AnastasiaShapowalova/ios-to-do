import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <>
      <IconModule icon={<AiOutlineUnorderedList />} size="sm" change="false" />
      <Text size="md" color="gray-lighten">
        Categorie name
      </Text>
      <Text variant="h6" color="gray-darken">
        0
      </Text>
      <Button
        variant="deleteCategoryButton"
        size="md"
        color="dark"
        icon={<IoCloseOutline />}></Button>
    </>
  )
}

export default CategorySimpleView
