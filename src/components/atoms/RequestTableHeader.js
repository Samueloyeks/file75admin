import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import './index.css'

// svg
import CaretDown from '../../assets/svg/CaretDown.svg' 

const RequestTableHeader = ({
    ...rest
}) => (
        // <div >
            <Row className='table-header'>
                <Col sm='3'>
                    <p className='file-text-bold vertical-align-text'>Status</p>
                </Col>
                <Col sm='3'>
                <p className='file-text-bold vertical-align-text'>Time</p>
                </Col>
                <Col sm='4'>
                <p className='file-text-bold vertical-align-text'>Client</p>
                </Col>
                <Col sm='2'>
                <p className='file-text-bold vertical-align-text'>Filter <CaretDown/></p>
                </Col>
            </Row>
        // </div>
    )

export default RequestTableHeader;