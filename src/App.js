import './App.css'
import { Navigator } from './pages'
import moment from 'moment'
import { Text } from './components'

function App() {
  return (
    <div className="App">
      {/* <Navigator /> */}
      <Text type="h1" fw="bold" color="diff">
        Heding | diff
      </Text>
      <Text type="h1" color="diff">
        count 1| diff
      </Text>
      <Text type="h2" color="darken">
        No Remainders | darken
      </Text>
      <Text type="h3" fw="bold" color="dark">
        Switcher count 00 | dark
      </Text>
      <Text type="h4" fw="bold" color="dark">
        {/* color='white' */}
        Switcher | dark
      </Text>
      <Text type="h4" fw="normal" color="lighten">
        Task, list name | lighten
      </Text>
      <Text type="p" fw="unset" color="darken">
        My lists | darken
      </Text>
    </div>
  )
}

export default App
