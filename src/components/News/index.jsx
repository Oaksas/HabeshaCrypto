import { Avatar, Card, Col, Typography } from 'antd'
import moment from 'moment'
import React from 'react'
import { Image } from 'antd';


function NewsCard
    ({ news, i }) {
    return (
        <Col xs={24} sm={12} lg={8} key={i}>
            <Card hoverable className='news-card'>
                <a href={news.link} target='_blank' rel="noreferrer">

                    <div className="news-image-container">
                        <Typography.Title className='news-title' level={4}>{news.title.substring(0, 50)}...</Typography.Title>
                        {/* <img style={{ maxWidth: '200px', maxHeight: '100px' }} /> */}
                        <Image
                            width={200}
                            src={news?.photo_url || 'https://www.cryptocompare.com/media/37746251/untitled-design-2.png'} alt="news"
                            style={{ borderRadius: '8px' }}


                        />
                    </div>
                    <p>{news.title}</p>
                    <div className='provider-container'>
                        <div>
                            <Avatar src={news?.source_logo_url} alt='' />
                        </div>
                        <Typography.Text className='provider-name'>{moment(news?.published_datetime_utc).startOf('ss').from()}</Typography.Text>
                    </div>
                </a>
            </Card>
        </Col>
    )
}

export default NewsCard
