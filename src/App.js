import './App.css'
import './style/config.style.css'
import './style/helpers.css'
import { Navigator } from './pages'
import { StoreProvider } from 'context'

function App() {
  return (
    <StoreProvider>
      <Navigator />
    </StoreProvider>
  )
}

export default App
