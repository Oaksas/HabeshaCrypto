import { Avatar, Card, Col, Typography } from 'antd'
import moment from 'moment'
import React from 'react'
import { Image } from 'antd';


function NewsCard
    ({ news, i }) {
    return (
        <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>

                <div className="news-image-container">
                    <a href={news.url} target='_blank' rel="noreferrer">
                        <Typography.Title className='news-title' level={4}>{news.title.substring(0, 50)}...</Typography.Title>

                    </a>
                    <Image
                        width={200}
                        src={news?.imageurl || 'https://www.cryptocompare.com/media/37746251/untitled-design-2.png'} alt="news"
                        style={{ borderRadius: '8px' }}


                    />
                </div>
                <a href={news.url} target='_blank' rel="noreferrer">
                    <p>{news.title}</p>

                </a>
                <div className='provider-container'>
                    <div>
                        <Avatar src={news?.source_info.img} alt='' />
                    </div>
                    <Typography.Text className='provider-name'>{moment.unix(news?.published_on).fromNow()}</Typography.Text>
                </div>
            </Card>
        </Col>
    )
}

export default NewsCard
