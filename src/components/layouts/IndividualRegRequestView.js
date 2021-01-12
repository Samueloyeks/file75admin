import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'
import UserAvatar from 'react-user-avatar';


// svg 
import Close from '../../assets/svg/Close.svg';
import Info from '../../assets/svg/Info.svg';


// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';



const IndividualRegRequestView = ({
    request,
    close,
    deploying,
    deployRequest
}) => (
        <div>
            <Row className='p-3 border-bottom' style={{ backgroundColor: 'F5F5F5', marginLeft: 0 }}>
                <Col style={{ textAlign: 'left' }}>
                    <p className='file-text-bold' style={{ margin: 'unset' }}>Client</p>
                </Col>
                <Col style={{ textAlign: 'right' }}>
                    <div style={{ cursor: 'pointer' }} onClick={() => close()}>
                        <Close />
                    </div>
                </Col>
            </Row>

            <Row className='p-3' style={{ backgroundColor: '#FFF', marginLeft: 0 }}>
                <Col sm='2'>
                    <UserAvatar
                        className='uppercase'
                        size="65"
                        name={request.user.fullName}

                    />
                </Col>
                <Col sm='10'>
                    <p className='file-text-large file-text-bold uppercase'>{request.user.fullName}</p>
                    <p style={{ color: '#A7A7A7', fontSize: 14, margin: 0 }}>{request.user.email}</p>
                    <div style={{ display: 'flex' }}>
                        <DateText class='file-text-small file-text-bold' dateString={request.submitted} /> <TimeText class='file-text-small file-text-bold ml-2' dateString={request.submitted} />
                    </div>
                </Col>
            </Row>

            <Row style={{ marginLeft: 0 }} className='p-4 uppercase file-text-bold file-text-large border-top border-bottom'>
                {request.category.category} <Info className='info-icon' />
            </Row>

            <div style={{ backgroundColor: '#FFF' }}>
                <Row className='p-4'>
                    <Col sm='6' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin'>AVAILABILITY CODE:</p>
                        <CopyBox text={request.availabilityCode} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>FIRST PREFERRED NAME:</p>
                        <CopyBox text={request.businessName1} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin'>SECOND PREFERRED NAME:</p>
                        <CopyBox text={request.businessName2} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>GENERAL NATURE OF BUSINESS:</p>
                        <CopyBox text={request.businessCategory} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>FULL ADDRESS OF PRINCIPAL PLACE OF BUSINESS:</p>
                        <CopyBox text={request.principalAddress} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>FULL ADDRESS OF BRANCH(ES):</p>
                        <CopyBox text={request.branchAddress} />
                    </Col>
                </Row>


                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>FULL NAME:</p>
                        <CopyBox text={request.fullName} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>FORMER NAME OR SURNAME:</p>
                        <CopyBox text={request.surname} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>GENDER:</p>
                        <CopyBox text={request.sex} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>AGE:</p>
                        <CopyBox text={request.age} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>PHONE NUMBER:</p>
                        <CopyBox text={request.phone} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>EMAIL:</p>
                        <CopyBox text={request.email} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>RESIDENTIAL ADDRESS:</p>
                        <CopyBox text={request.address} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>OCCUPATION:</p>
                        <CopyBox text={request.occupation} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>NATIONALITY:</p>
                        <CopyBox text={request.nationality} />
                    </Col>
                    <Col sm='6' >
                        <p className='file-text-bold no-margin'>STATE:</p>
                        <CopyBox text={request.state} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <div className='image-download-container'>
                            <p className='file-text-bold no-margin'>SIGNATURE:</p>
                            <a href={request.signature} download className="image-download">
                                <img src={request.signature} />
                                <div class="middle">
                                    <div class="text">Download</div>
                                </div>
                            </a>
                        </div>
                    </Col>

                    <Col sm='6' >
                        <div className='image-download-container'>
                            <p className='file-text-bold no-margin'>PASSPORT:</p>
                            <a href={request.passport} download className="image-download">
                                <img src={request.passport} />
                                <div class="middle">
                                    <div class="text">Download</div>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>

                <div style={{ padding: 15 }}>
                    <Button
                        className='deploy-button'
                        onClick={() => deployRequest(request)}
                    >
                        {
                            deploying ?
                                <Spinner />
                                :
                                'Deploy'
                        }
                    </Button>
                </div>
            </div>
        </div>
    )

export default IndividualRegRequestView;