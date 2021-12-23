import { useContext } from 'react'
import { StoreContext } from '../'

const useStore = () => useContext(StoreContext)

export default useStore
