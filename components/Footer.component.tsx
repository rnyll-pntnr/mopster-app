import {
    Layout,
    Row,
    Col,
    Space
} from 'antd'
import logo from '@/public/mopster.png'
import Image from 'next/image'
const {
    Footer
} = Layout

export default function FooterPartial() {
    return (
        <>
            <Footer style={{
                backgroundColor: '#333',
                color: '#fff'
            }}>
                <Row>
                    <Col span={8}>
                        <div className="space-align-container">
                            <div className="space-align-block">
                                <Space align='baseline'>
                                    <Image
                                    src={logo.src}
                                    alt="Logo"
                                    width={120}
                                    height={50}
                                    />
                                </Space>
                                <Space align='baseline'>
                                    <div className="space-align-container">
                                        <div className="space-align-block">
                                            <p>
                                            Mopster Cleaning company is a first-rate cleaning company with over 4years of experience in janitorial and commercial cleaning service in UAE. With our company, your satisfaction is guaranteed. You can have full confidence in choosing our team.
                                            </p>
                                        </div>
                                    </div>
                                </Space>
                            </div>
                        </div>
                    </Col>
                    <Col span={4}>
                    </Col>

                    <Col span={8}>
                        <h1>CONTACT INFORMATION</h1>
                        <p>
                            Phone: <a href="tel:+97150470083">+971 50 470083</a>
                        </p>
                        <p>
                            mail: <a href="mailto:clean@mopster.net">clean@mopster.net</a>
                        </p>
                        <p>
                            Address: Dubai, United Arab Emirates
                        </p>
                    </Col>
                </Row>
                <div className="space-align-container">
                    <div className="space-align-block" style={{ textAlign: 'center'}}>
                        <Space align='baseline'>
                            <p>Mopster ©2023</p>
                        </Space>
                    </div>
                </div>
            </Footer>
        </>
    )
}