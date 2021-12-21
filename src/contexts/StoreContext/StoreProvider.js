import { useReducer } from 'react'
import { StoreContext } from '.'
import { initialState, reducer } from '../../contexts/reducer/reducer'

const StoreProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <StoreContext.Provider
      value={{
        state,
        dispatch
      }}>
      {children}
    </StoreContext.Provider>
  )
}

export default StoreProvider
