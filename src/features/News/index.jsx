import { Select, Typography, Row, Col, Avatar, Card } from 'antd'
import moment from 'moment'
import { useGetCryptoNewsQuery } from '../../services/cryptoNewsAPI'
import { Link } from 'react-router-dom'
import NewsCard from '../../components/News'


function News({ simplified }) {
    const { data: cryptoNews, error, isFetching } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrency', count: simplified ? 6 : 12 })
    console.log("cryptoNews", cryptoNews)
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
                {((simplified ? cryptoNews?.data.slice(0, 6) : cryptoNews?.data.slice(0, 12)) || []).map((news, i) => (
                    <NewsCard key={i} news={news} i={i} />
                ))}
            </Row>
        </>
    );

}

export default News