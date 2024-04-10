import Layout from '@/components/templates/Layout'
import useAuth from '@/data/hook/UseAuth'
import React from 'react'

export default function Profile (): React.JSX.Element {
  const { user } = useAuth()
  return (
    <main>
      <Layout
      title='Perfil'
      subTitle='Pagína de notificações'>
        <h1>
          {`Olá ${user?.name}, seja bem vindo a sua página de perfil`}
        </h1>
      </Layout>
    </main>
  )
}
