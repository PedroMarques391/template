import { type IAppContextProps, type IAppContext, type Theme } from '@/interfaces/AppContextInterface'
import { createContext, useState } from 'react'

const AppContext = createContext<IAppContext>({})

export function AppProvider ({ children }: IAppContextProps): JSX.Element {
  const [theme, setTheme] = useState<Theme>()

  function onChangeTheme (): void {
    setTheme(theme === '' ? 'dark' : '')
  }

  return (
        <AppContext.Provider value={{ theme: 'dark', onChangeTheme }}>
            {children}
        </AppContext.Provider>
  )
}

export default AppContext
