import './App.css'
import './style/config.style.css'
import './style/helpers.css'
import { Navigator } from './pages'
import { StoreProvider } from 'contexts/StoreContext'
// import moment from 'moment'

function App() {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  )
}

export default App
