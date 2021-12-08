import './App.css'
import { Navigator } from './pages'
import moment from 'moment'
import { Icon } from './components'
import { AiOutlineUnorderedList } from 'react-icons/ai'

function App() {
  return (
    <div className="App">
      <Navigator />
      <Icon icon={<AiOutlineUnorderedList />} />
    </div>
  )
}

export default App
