import useAuth from '@/data/hook/UseAuth'
import Link from 'next/link'
import React from 'react'

const Logo = (): React.JSX.Element => {
  const { user } = useAuth()

  return (
    <div className={`
    flex flex-col items-center justify-center
    bg-white
    h-14 w-14 rounded-full
    `}>
      <Link href="/profile">
        <img
          src={user?.urlImage ?? '/images/default.png'}
          alt="Foto de perfil"
          className='rounded-full w-14 h-14'
        />
      </Link>
    </div>
  )
}

export default Logo
