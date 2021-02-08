import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const AttesteeView = ({ attestee }) => (
    <div>
        <div className='sub-header'>
            Attestee Details
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={attestee.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={attestee.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={attestee.otherName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={attestee.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={attestee.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={attestee.nationality} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>FORMER NAME:</p>
                <CopyBox text={attestee.formerName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FORMER NATIONALITY:</p>
                <CopyBox text={attestee.formerNationality} />
            </Col>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={attestee.phone} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={attestee.email} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                <CopyBox text={attestee.documentType} />
            </Col>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>IDENTITY NUMBER:</p>
                <CopyBox text={attestee.documentId} />
            </Col>
        </Row>


        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                    <a href={attestee.document} download className="image-download">
                        <img src={attestee.document} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={attestee.signature} download className="image-download">
                        <img src={attestee.signature} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>
        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>PASSPORT:</p>
                    <a href={attestee.passport} download className="image-download">
                        <img src={attestee.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>

        <ResidentialAddressView
            title='Attestee Residential Address'
            residentialAddress={attestee.residentialAddress} />

    </div>
)

export default AttesteeView;