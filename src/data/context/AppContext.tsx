import { type IAppContextProps, type IAppContext } from '@/interfaces/AppContextInterface'
import { createContext, useEffect, useState } from 'react'

const AppContext = createContext<IAppContext>({})

export function AppProvider ({ children }: IAppContextProps): JSX.Element {
  const [theme, setTheme] = useState<any>()

  function onChangeTheme (): void {
    const newTheme = theme === '' ? 'dark' : ''
    setTheme(newTheme)
    localStorage.setItem('theme', newTheme)
  }

  useEffect(() => {
    const value = localStorage.getItem('theme')
    setTheme(value)
  }, [])

  return (
        <AppContext.Provider value={{ theme, onChangeTheme }}>
            {children}
        </AppContext.Provider>
  )
}

export default AppContext
