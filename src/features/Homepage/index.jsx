import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'
import CountUp from 'react-countup'
import { useGetCryptosQuery } from '../../services/cryptoApi'
import Cryptocurrencies from '../Cryptocurrencies'
import News from '../News'


function Homepage() {
    const { data, isFetching } = useGetCryptosQuery()
    const globalStats = data?.data?.stats

    if (isFetching) return 'Loading...'
    return (
        <>
            <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}> <Statistic title='Total Cryptocurrencies' value={globalStats.total} /></Col>
                <Col span={12}> <Statistic title='Total Exchanges' value={millify(globalStats.totalExchanges)} /></Col>
                <Col span={12}> <Statistic title='Total Market Cap' value={millify(globalStats.totalMarketCap)} /></Col>
                <Col span={12}> <Statistic title='Total 24 hour Volume' value={millify(globalStats.total24hVolume)} /></Col>
                <Col span={12}> <Statistic title='Total Markets' value={millify(globalStats.totalMarkets)} /></Col>

            </Row>
            <div className="home-heading-container">
                <Typography.Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Typography.Title>
            </div>
            <Cryptocurrencies />
            <div className="home-heading-container">
                <Typography.Title level={2} className='home-title'>Latest Crypto News</Typography.Title>
                <Typography.Title level={3} className='show-more'><Link to='/news'>Show more</Link></Typography.Title>
            </div>
            <News simplified />

        </>)
}

export default Homepage