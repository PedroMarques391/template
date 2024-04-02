import { type IButtonThemeProps } from '@/interfaces/TemplateInterfaces'
import React from 'react'
import { SunIcon } from '../icons'

const ButtonTheme = ({ theme, onChangeTheme }: IButtonThemeProps): React.JSX.Element => {
  return theme === 'dark'
    ? (
    <div onClick={onChangeTheme} className=''>
        <div>
            {SunIcon}
        </div>
        <div>
            <span>
                Claro
            </span>
        </div>
    </div>
      )
    : (
    <div></div>
      )
}

export default ButtonTheme
