import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';



const PlaceOfBusinessView = ({ placeOfBusiness }) => (
    <div>
        <div className='sub-header'>
            PRINCIPAL PLACE OF BUSINESS
        </div>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>STATE:</p>
                <CopyBox text={placeOfBusiness.state} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>LGA:</p>
                <CopyBox text={placeOfBusiness.lga} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>CITY/TOWN/VILLAGE:</p>
                <CopyBox text={placeOfBusiness.city} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>POSTAL CODE:</p>
                <CopyBox text={placeOfBusiness.postalCode} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>HOUSE NUMBER/BUILDING NAME:</p>
                <CopyBox text={placeOfBusiness.houseNumber} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>STREET NAME:</p>
                <CopyBox text={placeOfBusiness.streetName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' >
                <p className='file-text-bold no-margin  file-text-small'>FULL ADDRESS OF BRANCHES:</p>
                <CopyBox text={placeOfBusiness.branchAddress} />
            </Col>
        </Row>
    </div>
)

export default PlaceOfBusinessView;