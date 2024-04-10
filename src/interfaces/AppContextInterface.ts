export interface IAppContextProps {
  children: any
}
export type Theme = 'dark' | ''
export interface IAppContext {
  theme?: string
  onChangeTheme?: () => void
}
