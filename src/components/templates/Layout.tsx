import React from 'react'
import Sidebar from './Sidebar'
import Topbar from './Topbar'
import { type ILayoutProps } from '@/interfaces/TemplateInterfaces'
import Content from './Content'
import useAppData from '@/data/hook/useAppData'

const Layout = ({ title, subTitle, children }: ILayoutProps): React.JSX.Element => {
  const { theme, onChangeTheme } = useAppData()
  return (
    <section className={`${theme} flex h-screen w-screen`}>
      <Sidebar/>
      <div className={'flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800'}>
      <Topbar title={title} subTitle={subTitle}/>
      <Content>
        {children}
      </Content>
      </div>
    </section>
  )
}

export default Layout
