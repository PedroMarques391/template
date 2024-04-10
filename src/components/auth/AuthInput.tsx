import { type IAuthInputProps } from '@/interfaces/AuthInterface'
import React from 'react'

const AuthInput = ({ label, value, onValueChange, type, isRequired }: IAuthInputProps): React.JSX.Element => {
  return (
        <section className='flex flex-col mt-4'>
            <label>{label}</label>
            <input
                type={type}
                value={value}
                onChange={e => { onValueChange?.(e.target.value) }}
                required={isRequired}
                className={`
                px-4 py-3 rounded-lg bg-gray-200 mt-2 border 
                focus:border-blue-500 focus:outline-none
                focus:bg-white
                `}
                />

        </section>
  )
}

export default AuthInput
