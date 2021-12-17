import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Row, Container, Col } from '..'

const AppLayout = ({ left, right }) => {
  return (
    <BrowserRouter>
      <Container variant="fluid" className="height-100">
        <Row className="height-100">
          <Col col="2" className="height-100">
            {left}
          </Col>
          <Col col="10">
            <Routes>
              <Route path="/" element={right} />
            </Routes>
          </Col>
        </Row>
      </Container>
    </BrowserRouter>
  )
}

export default AppLayout
