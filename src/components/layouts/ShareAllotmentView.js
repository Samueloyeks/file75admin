import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const ShareAllotmentView = ({ share }) => (
    <div>
        <div className='sub-header'>
            Share Allotment
        </div>
        <Row className='p-4'>
            <Col sm='6'>
                <p className='file-text-bold no-margin file-text-small'>SHARE TYPE:</p>
                <CopyBox text={share.shareType} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>SHARES ALLOTED:</p>
                <CopyBox text={share.sharesAlloted} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='12'>
                <p className='file-text-bold no-margin file-text-small'>PRESCRIBED PARTICULARS:</p>
                <CopyBox text={share.prescribedParticulars} />
            </Col>
        </Row>

    </div>
)

export default ShareAllotmentView;