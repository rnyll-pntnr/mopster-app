import Head from 'next/head'
import {
    Layout,
    Row,
    Col
} from 'antd'

const {
    Content
} = Layout

export default function About(){
    return (
        <>
            <Head>
                <title>Mopster | About | Cleaning Services</title>
            </Head>
            <Content className='site-layout-content'>
                <Row>
                    <Col>
                        <h1 style={{ textAlign: 'center'}}>This is test content</h1>
                    </Col>
                </Row>
            </Content>
        </>
    )
}