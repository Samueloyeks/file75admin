import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';



const AddressView = ({ address, title }) => (
    <div>
        <div className='sub-header'>
            {title}
        </div>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>STATE:</p>
                <CopyBox text={address.state} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>LGA:</p>
                <CopyBox text={address.lga} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>CITY/TOWN/VILLAGE:</p>
                <CopyBox text={address.city} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>POSTAL CODE:</p>
                <CopyBox text={address.postalCode} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>HOUSE NUMBER/BUILDING NAME:</p>
                <CopyBox text={address.houseNumber} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>STREET NAME:</p>
                <CopyBox text={address.streetName} />
            </Col>
        </Row>

        {
            address.country ?
                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin  file-text-small'>COUNTRY:</p>
                        <CopyBox text={address.country} />
                    </Col>
                </Row>
                : null
        }
    </div>
)

export default AddressView;