import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Row, Container, Col } from '..'

const AppLayout = ({ left, right }) => {
  return (
    <BrowserRouter>
      <Container style={{ height: '100%' }} variant="fluid">
        <Row style={{ height: '100%' }}>
          <Col style={{ height: '100%' }} col="2">
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
