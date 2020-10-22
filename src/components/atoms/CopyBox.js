import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

// svg 
import Copy from '../../assets/svg/Copy.svg';

function showToast() {
    toast('Copied!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        type: 'success'
    })
}

const CopyBox = ({
    text
}) => (
        <div className='copy-box'>
            <p style={{ float: 'left', margin: 0 }}>{text}</p>
            <CopyToClipboard text={text}
                onCopy={() => showToast()}>
                <Copy style={{ float: 'right', cursor: 'pointer' }} />
            </CopyToClipboard>
        </div>
    )


export default CopyBox