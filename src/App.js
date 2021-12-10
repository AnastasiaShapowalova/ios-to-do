import './App.css'
import './style/config.style.css'
import { Navigator } from './pages'
// import moment from 'moment'
import {
  Title,
  Text,
  IconModule,
  SearchInput,
  Checkbox,
  Sidebar,
  Container,
  Row,
  Col
} from './components'
import { BsWalletFill } from 'react-icons/bs'
import { CategorySimpleForm, TaskSimpleForm } from './domains'

function App() {
  return (
    <div className="App">
      {/* <Container>
        <Row>
          <Col>JSHFDkjhsdf</Col>
          <Col>KJSDfhksjdf</Col>
          <Col>KJSH</Col>
        </Row> */}
      {/* <Navigator /> */}
      <Checkbox isChecked="isChecked" />
      <Text size="md" color="darken">
        Text
      </Text>
      <Checkbox isChecked="isChecked" color="red" />
      <Checkbox color="gray" />
      <Checkbox />
      <Title variant="title-body-1" color="lighten">
        h1
      </Title>
      <Title variant="title-body-2" color="darken">
        h2
      </Title>
      <Title variant="title-body-3" color="dark">
        h3
      </Title>
      <Title variant="title-body-4">h4</Title>
      <Title variant="title-caption-1">h5</Title>
      <Title variant="title-caption-2">h6</Title>
      <Text size="sm" color="dark">
        Text
      </Text>
      <Text size="md" color="darken">
        Text
      </Text>
      <Text size="lg" color="lighten">
        Text
      </Text>
      <IconModule
        variant="isChangeable"
        color="red"
        icon={<BsWalletFill />}></IconModule>
      <IconModule
        variant="isChangeable"
        color="gray"
        icon={<BsWalletFill />}></IconModule>
      <IconModule
        variant="isChangeable"
        color="orange"
        icon={<BsWalletFill />}></IconModule>
      <IconModule
        variant="isChangeable"
        color="blue"
        icon={<BsWalletFill />}></IconModule>
      <IconModule variant="isUnchangeable" icon={<BsWalletFill />}></IconModule>
      <SearchInput />
      <TaskSimpleForm />
      <CategorySimpleForm />
      {/* </Container> */}
    </div>
  )
}

export default App
