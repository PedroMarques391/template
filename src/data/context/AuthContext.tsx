import firebase from '../../firebase/config'
import { type AuthContextProps } from '@/interfaces/AuthContextInterface'
import type User from '@/model/User'
import Cookies from 'js-cookie'
import router from 'next/router'
import { createContext, useEffect, useState } from 'react'

const AuthContext = createContext<AuthContextProps>({})

async function normalizedUser (firebaseUser: firebase.User): Promise<User> {
  const token = await firebaseUser.getIdToken()
  return {
    uid: firebaseUser.uid,
    name: firebaseUser.displayName,
    email: firebaseUser.email,
    token,
    provider: firebaseUser.providerData[0]?.providerId,
    urlImage: firebaseUser.photoURL
  }
}

function manageCookie (logged: string): void {
  if (logged) {
    Cookies.set('admin-template-auth', logged, {
      expires: 7
    })
  } else {
    Cookies.remove('admin-template-auth')
  }
}

export function AuthProvider ({ children }: any): JSX.Element {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  async function configSession (firebaseUser: firebase.User | null): Promise<string | null | boolean> {
    if (firebaseUser?.email) {
      const user = await normalizedUser(firebaseUser)
      setUser(user)
      manageCookie('true')
      setLoading(false)
      return user.email
    } else {
      manageCookie('false')
      setUser(null)
      setLoading(false)
      return false
    }
  }

  const loginGoogle = async (): Promise<void> => {
    try {
      setLoading(true)
      const response = await firebase.auth().signInWithPopup(
        new firebase.auth.GoogleAuthProvider()
      )
      response.user && await configSession(response.user)
      await router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const logout = async (): Promise<void> => {
    try {
      setLoading(true)
      await firebase.auth().signOut()
      await configSession(null)
    } finally {
      setLoading(false)
    }
  }

  const register = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      response.user && await configSession(response.user)
      await router.push('/')
    } finally {
      setLoading(false)
    }
  }

  const login = async (email: string, password: string): Promise<void> => {
    try {
      setLoading(true)
      const response = await firebase.auth().signInWithEmailAndPassword(email, password)
      response.user && await configSession(response.user)
      await router.push('/')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (Cookies.get('admin-template-auth')) {
      const cancel = firebase.auth().onIdTokenChanged(configSession)
      return () => { cancel() }
    }
    setLoading(false)
  }, [])

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      login,
      loginGoogle,
      logout,
      register
    }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
