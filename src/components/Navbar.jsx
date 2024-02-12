import React, { useState, useEffect, useRef } from 'react';
import { Button, Menu, Typography, Avatar } from 'antd';
import { Link } from 'react-router-dom';
import { MoneyCollectOutlined, BulbOutlined, FundOutlined, MenuOutlined, HomeOutlined } from '@ant-design/icons';
import cryptoicon from '../assets/images/cryptocurrency.png';
import { MenuList } from '../utils';

function Navbar() {
    const [activeMenu, setActiveMenu] = useState(true);
    const [screenSize, setScreenSize] = useState(null);
    const menuRef = useRef(null);

    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        if (screenSize < 890) {
            setActiveMenu(false);
        } else {
            setActiveMenu(true);
        }
    }, [screenSize]);

    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target) && activeMenu) {
                setActiveMenu(false);
            }
        };

        document.addEventListener('click', handleOutsideClick);

        return () => {
            document.removeEventListener('click', handleOutsideClick);
        };
    }, [activeMenu]);

    return (
        <div className='nav-container' ref={menuRef}>
            <div className='logo-container'>
                <Avatar src={cryptoicon} size={'large'} />
                <Typography.Title level={2} className='logo'>
                    <Link to='/'>Habesa Crypto</Link>
                </Typography.Title>
                <Button className='menu-control-container' onClick={() => setActiveMenu(!activeMenu)}>
                    <MenuOutlined />
                </Button>
            </div>
            {activeMenu && (
                <div >
                    <Menu theme='dark'>
                        {MenuList.map((menu, i) => {
                            const IconComponent = {
                                HomeOutlined: <HomeOutlined />,
                                FundOutlined: <FundOutlined />,
                                MoneyCollectOutlined: <MoneyCollectOutlined />,
                                BulbOutlined: <BulbOutlined />,
                            }[menu.icon];

                            return (
                                <Menu.Item icon={IconComponent} key={i}>
                                    <Link to={menu.url} onClick={() => setActiveMenu(!activeMenu)}>{menu.title}</Link>
                                </Menu.Item>
                            );
                        })}
                    </Menu>
                </div>
            )}
        </div>
    );
}

export default Navbar;
