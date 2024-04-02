import { type ITopbarProps } from '@/interfaces/TemplateInterfaces'
import React from 'react'
import Title from './Title'
import ButtonTheme from './ButtonTheme'
import useAppData from '@/data/hook/useAppData'

const Topbar = ({ title, subTitle }: ITopbarProps): React.JSX.Element => {
  const { theme, onChangeTheme } = useAppData()
  return (
    <div className='flex '>
      <Title title={title} subTitle={subTitle}/>
      <div className='flex flex-grow justify-end'>
        <ButtonTheme theme={theme} onChangeTheme={onChangeTheme}/>
      </div>
    </div>
  )
}

export default Topbar
