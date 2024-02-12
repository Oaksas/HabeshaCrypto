import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import Cryptocurrencies from '../Cryptocurrencies'
import News from '../News'
import { useGetCryptosQuery } from '../../services/cryptoAPI'
import { Error, Loader } from '../../components'


function Homepage() {
    const { data, isFetching, isError } = useGetCryptosQuery(10)
    const globalStats = data?.data?.stats

    if (isFetching) return <Loader />
    if (isError) return <Error />

    return (
        <>
            <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}> <Statistic title='Total Cryptocurrencies' value={globalStats?.total} /></Col>
                <Col span={12}> <Statistic title='Total Exchanges' value={millify(globalStats?.totalExchanges)} /></Col>
                <Col span={12}> <Statistic title='Total Market Cap' value={millify(globalStats?.totalMarketCap)} /></Col>
                <Col span={12}> <Statistic title='Total 24 hour Volume' value={millify(globalStats?.total24hVolume)} /></Col>
                <Col span={12}> <Statistic title='Total Markets' value={millify(globalStats?.totalMarkets)} /></Col>

            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
            </div>
            <Cryptocurrencies simplified={true} />
            <Typography.Title level={3} className='show-more' style={{ textAlign: 'right' }}
            >
                <Link to='/cryptocurrencies'>Show more</Link>
            </Typography.Title>
            <div className="home-heading-container">
                <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
            </div>
            <News simplified />
            <Typography.Title level={3} className='show-more' style={{ textAlign: 'right' }}
            ><Link to='/news'>Show more</Link></Typography.Title>


        </>)
}

export default Homepage