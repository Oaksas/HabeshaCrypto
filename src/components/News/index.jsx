import { Card, Col, Typography } from 'antd'
import React from 'react'

function NewsCard
    ({ news, i }) {
    return (
        <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
                <a href={news.url} target='_blank' rel="noreferrer">

                    <div className="news-image-container">
                        <Typography.Title className='news-title' level={4}>{news.title}</Typography.Title>

                    </div>



                </a>
            </Card>
        </Col>
    )
}

export default NewsCard
