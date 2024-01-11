import { BulbOutlined, FundOutlined, HomeOutlined, MoneyCollectOutlined } from "@ant-design/icons";

export const MenuList = [
    {
        title: 'Home',
        url: '/',
        icon: 'HomeOutlined',
    },
    {
        title: 'Cryptocurrencies',
        url: '/cryptocurrencies',
        icon: 'FundOutlined',
    },
    {
        title: 'Exchanges',
        url: '/exchanges',
        icon: 'MoneyCollectOutlined',
    },
    {
        title: 'News',
        url: '/news',
        icon: 'BulbOutlined',
    }
];

export const BaseUrl = 'https://coinranking1.p.rapidapi.com';
export const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'bb7c54c949mshf76f9cd4b889e90p1625f5jsnaf1ff6eef258',
};

export const BaseUrlNews = 'https://real-time-news-data.p.rapidapi.com';
export const newsHeaders = {
    'X-RapidAPI-Key': 'bb7c54c949mshf76f9cd4b889e90p1625f5jsnaf1ff6eef258',
    'X-RapidAPI-Host': 'real-time-news-data.p.rapidapi.com'
}

export const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const createRequestNews = (url) => ({ url, headers: newsHeaders });

export const time = ['3h', '24h', '7d', '30d', '3m', '1y', '5y']

