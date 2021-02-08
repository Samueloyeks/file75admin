import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';
import AttesteeView from './AttesteeView';


const MinorPartnerView = ({index, minorPartner }) => (
    <div>
        <div className='sub-header'>
           {index+1}) Minor Partner
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={minorPartner.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={minorPartner.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={minorPartner.otherName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={minorPartner.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={minorPartner.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={minorPartner.nationality} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>FORMER NAME:</p>
                <CopyBox text={minorPartner.formerName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FORMER NATIONALITY:</p>
                <CopyBox text={minorPartner.formerNationality} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                <CopyBox text={minorPartner.occupation} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={minorPartner.phone} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={minorPartner.email} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                <CopyBox text={minorPartner.documentType} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>IDENTITY NUMBER:</p>
                <CopyBox text={minorPartner.documentId} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                    <a href={minorPartner.document} download className="image-download">
                        <img src={minorPartner.document} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={minorPartner.signature} download className="image-download">
                        <img src={minorPartner.signature} />
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
                    <a href={minorPartner.passport} download className="image-download">
                        <img src={minorPartner.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>
        
        <ResidentialAddressView
         title ='Partner Residential Address'
         residentialAddress={minorPartner.residentialAddress}/>

         <AttesteeView attestee={minorPartner.attestee}/>
         
         <div className='sub-footer'></div>
    </div>
)

export default MinorPartnerView;