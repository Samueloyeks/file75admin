import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';
import { formatCamelCase } from '../../helpers/encode'


const SecretaryView = ({ secretary }) => (
    <div>
        <div className='sub-header'>
            SECRETARY
        </div>

        {
            secretary.secretaryType === 'individual' ?
                <div>
                    <Row className='p-4'>
                        <Col sm='4' style={{ margin: 'auto' }}>
                            <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                            <CopyBox text={secretary.surname} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                            <CopyBox text={secretary.firstName} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>SECRETARY TYPE:</p>
                            <CopyBox text={secretary.secretaryType} />
                        </Col>
                    </Row>

                    <Row className='p-4'>
                        <Col sm='4' style={{ margin: 'auto' }}>
                            <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                            <CopyBox text={secretary.dob} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                            <CopyBox text={secretary.sex} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                            <CopyBox text={secretary.nationality} />
                        </Col>
                    </Row>

                    <Row className='p-4'>
                        <Col sm='4' style={{ margin: 'auto' }}>
                            <p className='file-text-bold no-margin file-text-small'>FORMER NATIONALITY:</p>
                            <CopyBox text={secretary.formerNationality} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                            <CopyBox text={secretary.occupation} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                            <CopyBox text={secretary.phone} />
                        </Col>
                    </Row>

                    <Row className='p-4'>
                        <Col sm='4' style={{ margin: 'auto' }}>
                            <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                            <CopyBox text={secretary.email} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                            <CopyBox text={secretary.documentType} />
                        </Col>
                        <Col sm='4'>
                            <p className='file-text-bold no-margin file-text-small'>IDENTITY NUMBER:</p>
                            <CopyBox text={secretary.documentId} />
                        </Col>
                    </Row>

                    <Row className='p-4'>
                        <Col sm='6' >
                            <div className='image-download-container'>
                                <p className='file-text-bold no-margin file-text-small'>MEANS OF IDENTIFICATION:</p>
                                <a href={secretary.document} download className="image-download">
                                    <img src={secretary.document} />
                                    <div className="middle">
                                        <div className="text">Download</div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                        <Col sm='6' >
                            <div className='image-download-container'>
                                <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                                <a href={secretary.signature} download className="image-download">
                                    <img src={secretary.signature} />
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
                                <a href={secretary.passport} download className="image-download">
                                    <img src={secretary.passport} />
                                    <div className="middle">
                                        <div className="text">Download</div>
                                    </div>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </div>
                : null
        }

        {
            secretary.secretaryType === 'corporateBody' ?
                <div>
                    <Row className='p-4'>
                        <Col sm='4' style={{ margin: 'auto' }}>
                            <p className='file-text-bold no-margin file-text-small'>COMPANY NAME:</p>
                            <CopyBox text={secretary.companyName} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>REG. NUMBER:</p>
                            <CopyBox text={secretary.regNum} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>SECRETARY TYPE:</p>
                            <CopyBox text={formatCamelCase(secretary.secretaryType)} />
                        </Col>
                    </Row>

                    <Row className='p-4'>
                        <Col sm='4'>
                            <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                            <CopyBox text={secretary.phone} />
                        </Col>
                        <Col sm='4' >
                            <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                            <CopyBox text={secretary.email} />
                        </Col>
                    </Row>
                </div>
                : null
        }

        <ResidentialAddressView
            title='Secretary Registered Address'
            residentialAddress={secretary.principalAddress} />


        <div className='sub-footer'></div>
    </div>
)

export default SecretaryView;