import React from 'react'
import { Button, Menu, Typography, Avatar } from 'antd'
import { Link } from 'react-router-dom'
import { MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, HomeOutlined } from '@ant-design/icons'
import cryptoicon from '../assets/images/cryptocurrency.png'
import { MenuList } from '../utils'
function Navbar() {
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
                {MenuList.map((menu) => (
                    <Menu.Item icon={menu.icon}>
                        <Link to={menu.path}>{menu.title}</Link>
                    </Menu.Item>
                ))}

            </Menu>

        </div>
    )
}

export default Navbar