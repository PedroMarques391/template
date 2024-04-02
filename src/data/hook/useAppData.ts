import { useContext } from 'react'
import AppContext from '../context/AppContext'

const useAppData = (): any => useContext(AppContext)

export default useAppData
