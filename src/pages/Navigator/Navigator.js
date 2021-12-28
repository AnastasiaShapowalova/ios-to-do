import AppLayout from '../../components/AppLayout/AppLayout'
import { TasksAll } from '../'
import { Sidebar } from '../../components'
import { Routes, BrowserRouter, Route } from 'react-router-dom'

const Navigator = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <AppLayout
              left={<Sidebar />}
              right={<TasksAll color="blue" title="No remainders" />}
            />
          }></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Navigator
