import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';


const NatureOfBusinessView = ({ request }) => (
    <div>
        <div className='sub-header'>
            NATURE OF BUSINESS
                </div>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>NATURE OF BUSINESS CATEGORY:</p>
                <CopyBox text={request.natureOfBusiness} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>SPECIFIC NATURE OF BUSINESS CATEGORY:</p>
                <CopyBox text={request.specificNature} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER DESCRIPTION:</p>
                <CopyBox text={request.businessDescription} />
            </Col>
        </Row>
    </div>
)

export default NatureOfBusinessView;