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



const RequestView = ({
    request,
    close
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
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin'>FIRST CHOICE:</p>
                    </Col>
                    <Col sm='8' >
                        <CopyBox text={request.companyName1} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin'>SECOND CHOICE:</p>
                    </Col>
                    <Col sm='8'>
                        <CopyBox text={request.companyName2} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin'>PHONE NUMBER:</p>
                    </Col>
                    <Col sm='8'>
                        <CopyBox text={request.phone} />
                    </Col>
                </Row>

                <div style={{padding:15}}>
                <Button className='deploy-button'>Deploy</Button>
                </div>
            </div>
        </div>
    )

export default RequestView;