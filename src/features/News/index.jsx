import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsAPI'
import { Link } from 'react-router-dom'


function News({ simplified }) {
    const { data: cryptoNews, error, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })
    console.log(cryptoNews, error?.data?.error?.message, isFetching)
    if (isFetching || cryptoNews?.articles?.length === 0) return 'Loading...'
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
                {cryptoNews?.articles.map((news, i) => (
                    <Col xs={24} sm={12} lg={8} key={i}>
                        <Card hoverable className='news-card'>
                            <a href={news.url} target='_blank' rel="noreferrer">

                                <div className="news-image-container">
                                    <Typography.Title className='news-title' level={4}>{news.title}</Typography.Title>

                                </div>

                            </a>
                        </Card>
                    </Col>

                ))}

            </Row>
        </>)
}

export default News