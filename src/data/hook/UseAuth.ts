import { useContext } from 'react'
import AuthContext from '../context/AuthContext'

const useAuth = (): any => useContext(AuthContext)

export default useAuth
