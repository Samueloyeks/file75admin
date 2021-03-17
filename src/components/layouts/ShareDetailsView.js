import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';
import SharesView from './SharesView';


const ShareDetailsView = ({ shareDetails }) => (
    <div>
        <div className='sub-header'>
            Share Details
        </div>
        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>TOTA SHARE CAPITAL:</p>
                <CopyBox text={shareDetails.totalShareCapital} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>TOTAL SHARE CAPITAL (WORDS):</p>
                <CopyBox text={shareDetails.totalShareCapitalWords} />
            </Col>
        </Row>

        <div className='sub-header'>
            SHARES
        </div>
        {
            shareDetails.shares.map((share,index) =>
                <SharesView share={share} index={index} key={index} />
            )
        }


    </div>
)

export default ShareDetailsView;