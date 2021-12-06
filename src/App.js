import './App.css'
import { Navigator } from './pages'
import moment from 'moment'
import { Button } from './components/Button'

function App() {
  return (
    <div className="App">
      {/* <Navigator /> */}
      <Button shape="rounded" type="default">
        Button
      </Button>
      <Button shape="circle">X</Button>
      <Button shape="square">X</Button>
    </div>
  )
}

export default App
