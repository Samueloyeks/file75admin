import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';



const ResidentialAddressView = ({ title, residentialAddress }) => (
    <div>
        <div className='sub-header'>
            {title}
        </div>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>COUNTRY:</p>
                <CopyBox text={residentialAddress.country} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>STATE:</p>
                <CopyBox text={residentialAddress.state} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>LGA:</p>
                <CopyBox text={residentialAddress.lga} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>CITY:</p>
                <CopyBox text={residentialAddress.city} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>POSTAL CODE:</p>
                <CopyBox text={residentialAddress.postalCode} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>HOUSE NUMBER:</p>
                <CopyBox text={residentialAddress.houseNumber} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>STREET NAME:</p>
                <CopyBox text={residentialAddress.streetName} />
            </Col>
        </Row>

    </div>
)

export default ResidentialAddressView;