import Layout from '@/components/templates/Layout'
import React from 'react'

export default function Home (): React.JSX.Element {
  return (
    <main>
      <Layout
      title='Inicio'
      subTitle='Página inicial do do projeto'>
        <h1>
          Conteúdo
        </h1>
      </Layout>
    </main>
  )
}
