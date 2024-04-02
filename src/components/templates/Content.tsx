import { type IContentProps } from '@/interfaces/TemplateInterfaces'
import React from 'react'

const Content = ({ children }: IContentProps): React.JSX.Element => {
  return (
    <div className={`
    flex flex-col mt-7 dark:text-gray-200
    `}>
        {children}
    </div>
  )
}

export default Content
