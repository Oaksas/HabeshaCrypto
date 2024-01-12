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

export const BaseUrl = import.meta.env.VITE_CRYPTO_API_URL;
export const cryptoApiHeaders = {
    'x-rapidapi-host': import.meta.env.VITE_CRYPTO_RAPIDAPI_HOST,
    'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
};

export const BaseUrlNews = import.meta.env.VITE_NEWS_API_URL;
export const newsHeaders = {
    Authorization: import.meta.env.VITE_NEWS_API_KEY,
}

export const createRequest = (url) => ({ url, headers: cryptoApiHeaders });
export const createRequestNews = (url) => ({ url, headers: newsHeaders });

export const time = ['3h', '24h', '7d', '30d', '3m', '1y', '5y']

