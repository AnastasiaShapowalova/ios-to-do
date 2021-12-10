import './App.css'
import './style/config.style.css'
import { Navigator } from './pages'
// import moment from 'moment'
import { Container, Row, Col, Checkbox } from './components'

function App() {
  return (
    <div className="App">
      {/* <Container>
        <Row>
          <Col>JSHFDkjhsdf</Col>
          <Col>KJSDfhksjdf</Col>
          <Col>KJSH</Col>
        </Row> */}
      <Navigator />
    </div>
  )
}

export default App
