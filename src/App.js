import './App.css'
import './style/config.style.css'
import { Navigator } from './pages'
// import moment from 'moment'
import { Container, Row, Col } from './components'

function App() {
  return (
    <div className="App">
      <Container variant="fluid">
        <Row>
          <Col col="1">
            JSHFDkjhsdf Containers provide a means to center and horizontally
            pad your site’s contents. Use .container for a responsive pixel
            width or .container-fluid for width: 100% across all viewport and
            device sizes. Rows are wrappers for columns. Each column has
            horizontal padding (called a gutter) for controlling the space
            between them. This padding is then counteracted on the rows with
            negative margins. This way, all the content in your columns is
            visually aligned down the left side. In a grid layout, content must
            be placed within columns and only columns may be immediate children
            of rows. Thanks to flexbox, grid columns without a specified width
            will automatically layout as equal width columns. For example, four
            instances of .col-sm will each automatically be 25% wide from the
            small breakpoint and up. See the auto-layout columns section for
            more examples. Column classes indicate the number of columns you’d
            like to use out of the possible 12 per row. So, if you want three
            equal-width columns across, you can use .col-4.
          </Col>
          <Col col="1">KJSDfhksjdf</Col>
          <Col col="1">KJSH</Col>
        </Row>
        <Row variant>
          <Col col="4">JSHFDkjhsdf</Col>
          <Col col="4">KJSH</Col>
        </Row>
        <Row variant>
          <Col col="5">JSHFDkjhsdf</Col>
          <Col col="5">KJSDfhksjdf</Col>
          <Col>KJSH</Col>
        </Row>
      </Container>
      {/* <Navigator /> */}
    </div>
  )
}

export default App
