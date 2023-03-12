import {
    Layout,
    Menu
} from 'antd'
import Image from 'next/image'
import { useRouter } from 'next/router'
const {
    Header,
} = Layout
import logo from '@/public/mopster.png'
import {
    useState,
    useEffect
} from 'react'

export default function HeaderPartial() {
    const [ selectedKey, setSelectedKey ] = useState('/')
    
    const router = useRouter()

    useEffect(() => {
        if (selectedKey != window.location.pathname) {
            setSelectedKey(window.location.pathname)
        }
    },[selectedKey])

    const linkRouter = (e: any) => {
        setSelectedKey(e.key)
        return router.push(e.key)
    }

    const menuItems: any = [
        {
            key: '/',
            label: 'Home',
            onClick: linkRouter
        },
        {
            key: '/about',
            label: 'About',
            onClick: linkRouter
        },
        {
            key: '/contact-us',
            label: 'Contact Us'
        }
    ]
    return (
        <>
            <Header className='__header'>
                {/* Image Here */}
                    <Image
                        className='logo'
                        src={logo.src}
                        alt="Logo"
                        width={120}
                        height={40}
                        style={{
                            float: 'left',
                            marginTop: '5px'
                        }}
                    />
                {/* This is the menu */}
                <Menu
                theme='dark'
                mode="horizontal"
                defaultSelectedKeys={[selectedKey]}
                items={menuItems}
                style={{
                    position: 'relative',
                    display: 'flex',
                    justifyContent: 'center'
                }}
                />
            </Header>
        </>
    )
}