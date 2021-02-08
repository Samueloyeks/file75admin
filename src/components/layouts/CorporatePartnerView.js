import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const CorporatePartnerView = ({ index, corporatePartner }) => (
    <div>
        <div className='sub-header'>
            {index + 1}) Corporate Partner
        </div>
        <Row className='p-4'>
            <Col sm='6' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>COMPANY NAME:</p>
                <CopyBox text={corporatePartner.companyName} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>REGISTRATION NUMBER:</p>
                <CopyBox text={corporatePartner.regNumber} />
            </Col>
        </Row>
        <div className='sub-header'>
            Corporate Partner Authorized Signatory Details
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.otherName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.nationality} />
            </Col>
        </Row>


        <Row className='p-4'>
            <Col sm='6' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.phone} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={corporatePartner.authorizedSignatory.email} />
            </Col>
        </Row>


        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>PASSPORT:</p>
                    <a href={corporatePartner.authorizedSignatory.passport} download className="image-download">
                        <img src={corporatePartner.authorizedSignatory.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={corporatePartner.authorizedSignatory.signature} download className="image-download">
                        <img src={corporatePartner.authorizedSignatory.signature} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>

        <ResidentialAddressView
            title='Partner Residential Address'
            residentialAddress={corporatePartner.residentialAddress} />

        <div className='sub-footer'></div>
    </div>
)

export default CorporatePartnerView;