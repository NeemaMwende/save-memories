// src/QRCodeComponent.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const QRCodeComponent = () => {
    const [text, setText] = useState('');

    const handleChange = (event) => {
        setText(event.target.value);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>QR Code Generator</h1>
            <input
                type="text"
                value={text}
                onChange={handleChange}
                placeholder="Enter text or URL"
                style={{ padding: '10px', width: '300px', fontSize: '16px' }}
            />
            <div style={{ marginTop: '20px' }}>
                <QRCode value={text} />
            </div>
        </div>
    );
};

export default QRCodeComponent;
