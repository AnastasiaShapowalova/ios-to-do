import { Button, Text, IconModule } from '../../../../components'
import { IoCloseOutline } from 'react-icons/io5'
import { AiOutlineUnorderedList } from 'react-icons/ai'

const CategorySimpleView = () => {
  return (
    // icon, name, count
    <>
      <IconModule icon={<AiOutlineUnorderedList />} size="sm" change="false" />
      <Text size="md" color="lighten">
        Categorie name
      </Text>
      <Text variant="h6" color="darken">
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
