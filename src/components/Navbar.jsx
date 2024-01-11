import React, { useState, useEffect } from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, HomeOutlined } from '@ant-design/icons'
import cryptoicon from '../assets/images/cryptocurrency.png'
import { MenuList } from '../utils'

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true)
    const [screenSize, setScreenSize] = useState(null)

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth)
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)

    }, [])

    useEffect(() => {
        if (screenSize < 768) {
            setActiveMenu(false)
        } else {
            setActiveMenu(true)
        }
    }, [screenSize])


    return (
        <div className='nav-container'>
            <div className='logo-container'>
                <Avatar src={cryptoicon} size={'large'} />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Habesa Crypto</Link>
                </Typography.Title>
                {/* <Button className='menu-control-container'>
                    <MenuOutlined />
                </Button> */}
            </div>

            <Menu theme='dark'>
                {MenuList.map((menu, i) => {
                    const IconComponent = {
                        'HomeOutlined': <HomeOutlined />,
                        'FundOutlined': <FundOutlined />,
                        'MoneyCollectOutlined': <MoneyCollectOutlined />,
                        'BulbOutlined': <BulbOutlined />,
                    }[menu.icon];

                    return (
                        <Menu.Item icon={IconComponent} key={i}>
                            <Link to={menu.url}>{menu.title}</Link>
                        </Menu.Item>
                    );
                })}
            </Menu>
        </div>
    )
}

export default Navbar