import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';
import AttesteeView from './AttesteeView';


const DirectorView = ({ index, director }) => (
    <div>
        <div className='sub-header'>
            {index + 1}) Director
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={director.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={director.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={director.otherName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={director.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={director.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={director.nationality} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>FORMER NAME:</p>
                <CopyBox text={director.formerName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FORMER NATIONALITY:</p>
                <CopyBox text={director.formerNationality} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                <CopyBox text={director.occupation} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={director.phone} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={director.email} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                <CopyBox text={director.documentType} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>IDENTITY NUMBER:</p>
                <CopyBox text={director.documentId} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                    <a href={director.document} download className="image-download">
                        <img src={director.document} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={director.signature} download className="image-download">
                        <img src={director.signature} />
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
                    <a href={director.passport} download className="image-download">
                        <img src={director.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>

        <ResidentialAddressView
            title='Director Residential Address'
            residentialAddress={director.residentialAddress} />

        <ResidentialAddressView
            title='Director Service Address'
            residentialAddress={director.serviceAddress} />

        {/* <AttesteeView attestee={director.attestee} /> */}

        <div className='sub-footer'></div>
    </div>
)

export default DirectorView;