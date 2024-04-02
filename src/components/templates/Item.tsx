import { type IItemProps } from '@/interfaces/TemplateInterfaces'
import Link from 'next/link'

const Item = ({ url, text, icon, onClick, className }: IItemProps): React.JSX.Element => {
  const renderContent = (): React.JSX.Element => {
    return (
      <a
        className={`flex flex-col justify-center items-center h-20 w-20 dark:text-gray-200 ${className}`}>
        {icon}
        <span className={'text-xs font-light'}>{text}</span>
      </a>
    )
  }
  return (
    <li
    onClick={onClick}
    className={'hover:bg-gray-100 dark:hover:bg-gray-800 cursor-pointer'}>
      {url
        ? (
          <Link href={url} legacyBehavior>
            {renderContent()}
          </Link>
          )
        : (
            renderContent()
          )}

    </li>
  )
}

export default Item
