import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const WitnessView = ({ witness,index }) => (
    <div>
        <div className='sub-header'>
        {index+1}) Witness Details
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={witness.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={witness.firstName} />
            </Col>
            {
                witness.otherName ?
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                        <CopyBox text={witness.otherName} />
                    </Col> : null
            }
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={witness.phone} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={witness.email} />
            </Col>
            {
                witness.occupation ?
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                        <CopyBox text={witness.occupation} />
                    </Col> : null
            }
        </Row>


        <ResidentialAddressView
            title='witness Residential Address'
            residentialAddress={witness.residentialAddress} />

    </div>
)

export default WitnessView;