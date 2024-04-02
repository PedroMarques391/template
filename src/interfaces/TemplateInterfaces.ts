export interface ILayoutProps {
  title: string
  subTitle: string
  children?: any
}

export interface ITopbarProps {
  title: string
  subTitle: string
}

export interface ITitleProps {
  title: string
  subTitle: string
}

export interface IContentProps {
  children?: any
}

export interface IItemProps {
  url?: string
  text: string
  icon: JSX.Element
  className?: string
  onClick?: (e: any) => void
}

export interface IButtonThemeProps {
  theme: string
  onChangeTheme: () => void
}
