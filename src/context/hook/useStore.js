import { useContext } from 'react'
import { StoreContext } from 'context/'

const useStore = () => useContext(StoreContext)

export default useStore
