import React from 'react'
import Item from './Item'
import { BellIcon, HomeIcon, LogoutIcon, ToothIcon, MoonIcon, SunIcon } from '../icons'
import Logo from './Logo'
import useAppData from '@/data/hook/useAppData'
import useAuth from '@/data/hook/UseAuth'

const Sidebar = (): React.JSX.Element => {
  const { theme, onChangeTheme } = useAppData()
  const { logout } = useAuth()
  return (
    <aside className='flex flex-col dark:bg-gray-900 dark:text-gray-200 transition-all duration-1000 ease-out'>
      <div className={`
        flex flex-col items-center justify-center
        bg-gradient-to-r from-indigo-500 to-purple-800 
        h-20 w-20 
        `}><Logo /></div>
      <ul className='flex-grow'>
        <Item url='/' text='Home' icon={HomeIcon} />
        <Item url='/settings' text='Settings' icon={ToothIcon} />
        <Item url='/notifications' text='Notifications' icon={BellIcon} />
      </ul>
      <ul>
        <Item
        onClick={onChangeTheme}
        text={theme === 'dark' ? 'Claro' : 'Escuro'}
        icon={theme === 'dark' ? SunIcon : MoonIcon}
        className={`
        ${theme === 'dark'
        ? 'hover:bg-gradient-to-r hover:from-yellow-300 to hover:bg-yellow-600 hover:text-black'
        : 'hover:bg-gradient-to-r hover:from-gray-500 to hover:bg-gray-900 hover:text-white'} flex gap-2 sm:hidden transition-all duration-1000`}
        />

        <Item
          onClick={logout}
          text='Logout'
          icon={LogoutIcon}
          className='text-red-600 dark:text-red-400 transition-all duration-1000 dark:hover:text-white hover:bg-red-400 hover:text-white' />
      </ul>
    </aside>
  )
}

export default Sidebar
