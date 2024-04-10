import Layout from '@/components/templates/Layout'
import React from 'react'

export default function Settings (): React.JSX.Element {
  return (
    <main>
      <Layout
      title='settings'
      subTitle='Página de configurações'>
        <h1>
          Você não tem configurações
        </h1>
      </Layout>
    </main>
  )
}
