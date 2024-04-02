import React from 'react'
import Item from './Item'
import { BellIcon, HomeIcon, LogoutIcon, ToothIcon } from '../icons'
import Logo from './Logo'

const Sidebar = (): React.JSX.Element => {
  return (
    <aside className='flex flex-col dark:bg-gray-900 dark:text-gray-200'>
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
          onClick={() => { console.log('Sair') }}
          text='Logout'
          icon={LogoutIcon}
          className='text-red-600 dark:text-red-400 dark:hover:text-white hover:bg-red-400 hover:text-white' />
      </ul>
    </aside>
  )
}

export default Sidebar
