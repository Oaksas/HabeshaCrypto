import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from "@ant-design/icons";

export const MenuList = [
    {
        title: 'Home',
        url: '/',
        icon: <HomeOutlined />,
    },
    {
        title: 'Cryptocurrencies',
        url: '/cryoptocurrencies',
        icon: <FundOutlined />
    },
    {
        title: 'Exchanges',
        url: '/exchanges',
        icon: <MoneyCollectOutlined />,
    },
    {
        title: 'News',
        url: '/news',
        icon: <BulbOutlined />,
    }
]