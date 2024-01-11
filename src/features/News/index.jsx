import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsAPI'
import NewsCard from '../../components/News'
import { useState } from 'react'
import { useGetCryptosQuery } from '../../services/cryptoAPI'
import { Loader } from '../../components'


function News({ simplified }) {
    const [newsCategory, setNewsCategory] = useState('Cryptocurrency')
    const { data: cryptoNews, error, isFetching } = useGetCryptoNewsQuery({ newsCategory: newsCategory, count: simplified ? 6 : 12 })
    const { data: cryptos, isFetching: cryptosFetching } = useGetCryptosQuery(100)



    if (isFetching || cryptoNews?.articles?.length === 0) return (<Loader />)
    if (error) {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '80vh' }}>
                <Typography level={3} style={{ color: 'red' }}>
                    An error has occurred: {error?.data?.error?.message}
                </Typography>
            </div>
        );
    }
    return (
        <>
            <Row gutter={[24, 24]}>
                {!simplified && (
                    <Col span={24}>
                        <Select
                            showSearch
                            className='select-news'
                            placeholder='Select a Crypto'
                            optionFilterProp='children'
                            onChange={(value) => setNewsCategory(value ? value : "Cryptocurrency")}
                            filterOption={(input, option) => option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0}
                        >
                            <Select.Option value=''>Select a Crypto</Select.Option>
                            {!cryptosFetching && cryptos?.data?.coins?.map((coin, i) => (
                                <Select.Option value={coin.name} key={i}>{coin.name}</Select.Option>
                            ))}
                        </Select>
                    </Col>
                )
                }
                {((simplified ? cryptoNews?.data.slice(0, 6) : cryptoNews?.data.slice(0, 12)) || []).map((news, i) => (
                    <NewsCard key={i} news={news} i={i} />
                ))}
            </Row>
        </>
    );

}

export default News