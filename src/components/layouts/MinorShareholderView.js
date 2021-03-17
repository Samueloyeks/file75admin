import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';
import ShareholderPSCView from './ShareholderPSCView';
import ShareAllotmentView from './ShareAllotmentView';

const MinorShareholderView = ({ index, minorShareholder }) => (
    <div>
        <div className='sub-header'>
            {index + 1}) Minor Shareholder
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={minorShareholder.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={minorShareholder.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={minorShareholder.otherName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={minorShareholder.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={minorShareholder.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={minorShareholder.nationality} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>FORMER NAME:</p>
                <CopyBox text={minorShareholder.formerName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FORMER NATIONALITY:</p>
                <CopyBox text={minorShareholder.formerNationality} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                <CopyBox text={minorShareholder.occupation} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={minorShareholder.phone} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={minorShareholder.email} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                <CopyBox text={minorShareholder.documentType} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>IDENTITY NUMBER:</p>
                <CopyBox text={minorShareholder.documentId} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                    <a href={minorShareholder.document} download className="image-download">
                        <img src={minorShareholder.document} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={minorShareholder.signature} download className="image-download">
                        <img src={minorShareholder.signature} />
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
                    <a href={minorShareholder.passport} download className="image-download">
                        <img src={minorShareholder.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>

        <ResidentialAddressView
            title='Shareholder Residential Address'
            residentialAddress={minorShareholder.residentialAddress} />

        <ResidentialAddressView
            title='Shareholder Service Address'
            residentialAddress={minorShareholder.serviceAddress} />

        <ShareAllotmentView share={minorShareholder.share} />

        {
            minorShareholder.PSCType ?
                <ShareholderPSCView shareholder={minorShareholder} />
                :
                null
        }

        <div className='sub-footer'></div>
    </div>
)

export default MinorShareholderView;