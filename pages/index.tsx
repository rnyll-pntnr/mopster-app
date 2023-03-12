import Head from 'next/head'
import Image from 'next/image'
import {
  Layout,
  Carousel,
  Row,
  Col
} from 'antd'
import banner from '../public/img/banner.jpg'

const { Content } = Layout

export default function Home() {
  const carouselStyle: React.CSSProperties = {
    height: '100%',
    color: '#fff',
    lineHeight: '50vh',
    textAlign: 'center',
    background: '#364d79',
    fontSize: '5vh',
    display: 'block',
    margin: 'auto',
    justifyContent: 'center',
    width: '100%'
  }

  return (
    <>
      <Head>
        <title>Mopster | Home | Cleaning Services</title>
      </Head>
      <Content className='site-layout-content'>
        <Carousel>
          <Row>
            <Col>
              <Image
                src={banner}
                alt="Hero banner"
                style={carouselStyle}
              />
            </Col>
          </Row>
        </Carousel>
      </Content>
    </>
  )
}
