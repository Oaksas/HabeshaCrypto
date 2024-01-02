import React from 'react'
import { Typography, Row, Col, Statistic } from 'antd'
import millify from 'millify'
import { Link } from 'react-router-dom'


function Homepage() {
    return (
        <>
            <Typography.Title level={2} className='heading'>Global Crypto Stats</Typography.Title>
            <Row>
                <Col span={12}> <Statistic title='Total Cryptocurrencies' value={5} /></Col>
                <Col span={12}> <Statistic title='Total Exchanges' value={10} /></Col>
                <Col span={12}> <Statistic title='Total Market Cap' value={5} /></Col>
                <Col span={12}> <Statistic title='Total 24 hour Volume' value={15} /></Col>
                <Col span={12}> <Statistic title='Total Markets' value={24} /></Col>

            </Row>

        </>)
}

export default Homepage