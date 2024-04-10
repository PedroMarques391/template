import Image from 'next/image'
import Loading from '../../../public/images/loading.gif'
import useAuth from '@/data/hook/UseAuth'
import router from 'next/router'
import Head from 'next/head'

const ForceAuth = ({ children }: any): JSX.Element | null => {
  const { user, loading } = useAuth()
  function renderContent (): JSX.Element {
    return (
      <>

      <Head>
        <script
          id='auth'
          dangerouslySetInnerHTML={{
            __html: `
                if(!document.cookie?.includes("admin-template-auth")) {
                  window.location.href = "/authentication"
                }
                `
          }}
        />
      </Head>

        {children}
      </>
    )
  }

  function renderLoading (): JSX.Element {
    return (
      <div className='flex justify-center items-center h-screen'>
        <Image
          src={Loading}
          alt='Carregando'
          height={100}
          priority
          width={100}
        />
      </div>
    )
  }

  if (!loading && user?.email) {
    return renderContent()
  } else if (loading) {
    return renderLoading()
  } else {
    router.push('/authentication')
    return null
  }
}

export default ForceAuth
