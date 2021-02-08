import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const ProprietorView = ({ proprietor }) => (
    <div>
        <div className='sub-header'>
            PARTICULARS OF PROPRIETOR
                            </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={proprietor.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={proprietor.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={proprietor.otherName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={proprietor.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={proprietor.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={proprietor.nationality} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>FORMER NAME:</p>
                <CopyBox text={proprietor.formerName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FORMER NATIONALITY:</p>
                <CopyBox text={proprietor.formerNationality} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                <CopyBox text={proprietor.occupation} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={proprietor.phone} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={proprietor.email} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                <CopyBox text={proprietor.documentType} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>IDENTITY NUMBER:</p>
                <CopyBox text={proprietor.documentId} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                    <a href={proprietor.document} download className="image-download">
                        <img src={proprietor.document} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={proprietor.signature} download className="image-download">
                        <img src={proprietor.signature} />
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
                    <a href={proprietor.passport} download className="image-download">
                        <img src={proprietor.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>

        <ResidentialAddressView
            title='PROPRIETOR RESIDENTIAL ADDRESS'
            residentialAddress={proprietor.residentialAddress} />

    </div>
)

export default ProprietorView;