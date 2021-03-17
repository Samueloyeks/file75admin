import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const SharesView = ({ share, index }) => (
    <div>
        <div className='sub-header'>
            {index + 1}) Share
        </div>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SHARE TYPE:</p>
                <CopyBox text={share.shareType} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>SHARE CAPITAL:</p>
                <CopyBox text={share.shareCapital} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>SHARE CAPITAL (WORDS):</p>
                <CopyBox text={share.shareCapital} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>UNITS:</p>
                <CopyBox text={share.units} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NOMINAL SHARE VALUE:</p>
                <CopyBox text={share.nominalShareValue} />
            </Col>
        </Row>

    </div>
)

export default SharesView;