import { type IButtonThemeProps } from '@/interfaces/TemplateInterfaces'
import React from 'react'
import { MoonIcon, SunIcon } from '../icons'

const ButtonTheme = ({ theme, onChangeTheme }: IButtonThemeProps): React.JSX.Element => {
  return theme === 'dark'
    ? (
      <div
        onClick={onChangeTheme}
        className='hidden sm:flex items-center bg-gradient-to-r from-yellow-300 to bg-yellow-600 w-14 cursor-pointer lg:w-24 h-8 p-1 rounded-full transition-all duration-1000'>
        <div className='flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full'>
          {SunIcon}
        </div>
        <div className='hidden lg:flex items-center ml-4 text-white'>
          <span>
            Claro
          </span>
        </div>
      </div>
      )
    : (
      <div
        onClick={onChangeTheme}
        className='hidden sm:flex items-center justify-end lg:justify-center bg-gradient-to-r from-gray-500 to bg-gray-900 w-14 cursor-pointer lg:w-24 h-8 p-1 rounded-full transition-all duration-1000'>
        <div className='hidden lg:flex items-center mx-2 text-gray-300'>
          <span>
            Escuro
          </span>
        </div>
        <div className='flex items-center justify-center bg-black text-gray-300 w-6 h-6 rounded-full'>
          {MoonIcon}
        </div>
      </div>
      )
}

export default ButtonTheme
