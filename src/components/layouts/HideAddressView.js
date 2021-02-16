import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';


const HideAddressView = ({ request }) => (
    <div>
        <div className='sub-header'>
            Hide Residential Address
        </div>
        <Row className='p-4'>
            <Col sm='6' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>INDIVIDUAL:</p>
                <CopyBox text={request.hideIndividual ? 'Yes' : 'No'} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>AUTHORIZED SIGNATORY:</p>
                <CopyBox text={request.hideAuthorizedSignatory ? 'Yes' : 'No'} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>MINOR:</p>
                <CopyBox text={request.hideMinor ? 'Yes' : 'No'} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>ATTESTEE:</p>
                <CopyBox text={request.hideAttestee ? 'Yes' : 'No'} />
            </Col>
        </Row>

    </div>
)

export default HideAddressView;