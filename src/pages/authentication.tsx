import AuthInput from '@/components/auth/AuthInput'
import { GoogleIcon, WarnIcon } from '@/components/icons'
import useAuth from '@/data/hook/UseAuth'
import Image from 'next/image'
import React, { useState } from 'react'

const Authentication = (): React.JSX.Element => {
  const { login, register, loginGoogle } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [mode, setMode] = useState<'login' | 'register'>('login')
  const [error, setError] = useState<any>('')

  const showError = (message: string, timeInSeconds: number = 5): void => {
    setError(message)
    setTimeout(() => { setError(null) }, timeInSeconds * 1000)
  }

  const onSubmit = async (): Promise<void> => {
    try {
      if (mode === 'login') {
        await login(email, password)
        return
      }
      await register(email, password)
    } catch (error: any) {
      showError(error.message.includes('INVALID_LOGIN_CREDENTIALS') ? 'Email ou senha incorretos.' : error.message)
    }
  }
  return (
    <section className='flex h-screen justify-center items-center'>
      <div className='hidden md:block md:w-1/2 lg:w-2/3'>
        <Image
          src="https://source.unsplash.com/random"
          alt='Imagens aleatórias'
          priority
          height={1000}
          width={1000}
          className='h-screen w-full object-cover'
        />
      </div>
      <div className='w-full md:w-1/2 m-10 lg:w-1/3'>
        <h1 className='text-3xl font-bold mb-5'>
          {mode === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
        </h1>
        {error
          ? (
            <div className='flex items-center bg-red-400 text-white py-3 px-5 my-2 border-2 border-red-700 rounded-lg'>
              {WarnIcon}
              <span className='ml-3'>{error}</span>
            </div>
            )
          : false}
        <AuthInput
          label='Email'
          value={email}
          type='email'
          isRequired
          onValueChange={setEmail}
        />
        <AuthInput
          label='Senha'
          value={password}
          type='password'
          isRequired
          onValueChange={setPassword}
        />

        <button
          className='w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 transition-all duration-500 mt-6'
          onClick={onSubmit}>
          {mode === 'login' ? 'Entrar' : 'Cadastre-se'}
        </button>

        <div className='flex my-5 justify-center items-center'>
          <hr className='border border-gray-300 w-full' />
          <span className='px-2'>ou</span>
          <hr className='border border-gray-300 w-full' />
        </div>

        <button
          className=' flex items-center justify-center w-full bg-gray-200 hover:bg-gray-100 text-gray-800 rounded-lg px-4 py-3 mt-6 transition-all duration-500'
          onClick={loginGoogle}>
          {GoogleIcon}
          <span className='ml-2'>Entrar com o google</span>
        </button>
        {mode === 'login'
          ? (
            <p className='mt-8 capitalize flex justify-center items-center'>
              Novo por aqui?
              <a onClick={() => { setMode('register') }} className='text-blue-500 hover:text-blue-700 cursor-pointer font-semibold ml-2'>Crie uma conta gratuíta com apenas um clique!</a>
            </p>
            )
          : (
            <p className='mt-8 capitalize flex justify-center items-center'>
              Já faz parte da nossa comunidade?
              <a onClick={() => { setMode('login') }} className='text-blue-500 hover:text-blue-700 cursor-pointer font-semibold ml-2'>Entre com suas credenciais</a>
            </p>
            )}
      </div>
    </section>
  )
}

export default Authentication
