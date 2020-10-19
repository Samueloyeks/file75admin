import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import './index.css'

// svg 
import Clock from '../../assets/svg/Clock.svg';
import Unattended from '../../assets/svg/Unattended.svg';
import NRTag from '../../assets/svg/NRTag.svg';


const RequestCard = ({
    ...rest
}) => (
        <Row className='request-card'>
            <Col sm='3' style={{margin:'auto'}}>
                <Clock/><Unattended/>
            </Col>
            <Col sm='3'>
                <p className='file-text-bold file-text-normal vertical-align-text'>
                    21 Aug 2020,
                    2:36PM
                    </p>
            </Col>
            <Col sm='4'>
                <p className='file-text-bold file-text-normal vertical-align-text' style={{textTransform:'uppercase'}}>
                SAMUEL EGUNJOBI 
                <p className='file-text-small file-secondary'>samuelantelope@gmail.com</p>
                    </p>
            </Col>
            <Col sm='2' style={{textAlign:'center'}}>
                <NRTag/>
            </Col>
        </Row>
    )

export default RequestCard;