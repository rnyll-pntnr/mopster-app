import Head from 'next/head'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import HeaderPartial from '@/components/Header.component'
import FooterPartial from '@/components/Footer.component'
import {
  Layout,
  ConfigProvider,
  theme,
  Spin
} from 'antd'
import {
  useEffect,
  useState
} from 'react'


export default function App({ Component, pageProps }: AppProps) {
  const [ isLoading, setLoading ] = useState(true)
  useEffect(() => {
    if (isLoading) {
      setLoading(false)
    }
  }, [isLoading])
  const {
    token: { colorBgContainer }
  } = theme.useToken()
  return (
  <>
    <ConfigProvider
      theme={{
        algorithm: theme.defaultAlgorithm,
    }}>
      <Head>
        <link rel="icon" href="favicon.ico" />
        <meta name="description" content="Mopster Cleaning company is a first-rate cleaning company with over 4years of experience in janitorial and commercial cleaning service in UAE. With our company, your satisfaction is guaranteed. You can have full confidence in choosing our team." />
        <meta name="keywords" content="Cleaning services, homeservice, cleaning, experienced cleaning, cleaning UAE" />
        <meta property="og:image" content="logo.jpg"/>
        <meta property="og:title" content='Mopster Cleaning Services'/>
        <meta property="og:url" content='/'/>
        <meta property="og:description" content="Mopster Cleaning company is a first-rate cleaning company with over 4years of experience in janitorial and commercial cleaning service in UAE. With our company, your satisfaction is guaranteed. You can have full confidence in choosing our team." />
      </Head>
      <Layout>
        <Spin spinning={isLoading}>
          <HeaderPartial />
          <Component {...pageProps} style={{ background: colorBgContainer }} />
          <FooterPartial />
        </Spin>
      </Layout>
    </ConfigProvider>
  </>
  )
}
