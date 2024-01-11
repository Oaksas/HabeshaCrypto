import { Typography } from 'antd';
import React from 'react';

function Exchanges() {
    const gradientTextStyle = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        background: 'linear-gradient(45deg, #000000, #ffd700)', // Black to Golden gradient
        WebkitBackgroundClip: 'text',
        color: 'transparent',
        WebkitTextFillColor: 'transparent',
    };

    return (
        <div style={gradientTextStyle}>
            <Typography.Title level={1}>
                Coming Soon!
            </Typography.Title>
        </div>
    );
}

export default Exchanges;
