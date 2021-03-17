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
import PlaceOfBusinessView from './PlaceOfBusinessView'
import ProprietorView from './ProprietorView'
import NatureOfBusinessView from './NatureOfBusinessView'
import MultipleProprietorsView from './MultipleProprietorsView'
import HideAddressView from './HideAddressView'


import { formatCamelCase } from '../../helpers/encode'



const BusRegRequestView = ({
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
                        <DateText className='file-text-small file-text-bold' dateString={request.submitted} /> <TimeText className='file-text-small file-text-bold ml-2' dateString={request.submitted} />
                    </div>
                </Col>
            </Row>

            <Row style={{ marginLeft: 0 }} className='p-4 uppercase file-text-bold file-text-large border-top border-bottom'>
                {request.category.category} <Info className='info-icon' />
            </Row>

            {/* info  */}
            <div style={{ backgroundColor: '#FFF' }}>
                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>AVAILABILITY CODE:</p>
                        <CopyBox text={request.availabilityCode} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>FIRST PREFERRED NAME:</p>
                        <CopyBox text={request.businessName1} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>SECOND PREFERRED NAME:</p>
                        <CopyBox text={request.businessName1} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin  file-text-small'>COMMENCEMENT DATE:</p>
                        <CopyBox text={request.commencementDate} />
                    </Col>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin  file-text-small'>EMAIL:</p>
                        <CopyBox text={request.email} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin  file-text-small'>TYPE:</p>
                        <CopyBox text={formatCamelCase(request.type)} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='6' >
                        <div className='image-download-container'>
                            <p className='file-text-bold no-margin file-text-small'>DOCUMENT:</p>
                            <a href={request.document} download className="image-download">
                                <img src={request.document} />
                                <div className="middle">
                                    <div className="text">Download</div>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>


                <PlaceOfBusinessView placeOfBusiness={request.placeOfBusiness} />

                {
                    request.type === 'soleProprietorship' ?
                        <ProprietorView proprietor={request.proprietor} />
                        : null
                }

                {
                    request.type === 'partnership' ?
                        <MultipleProprietorsView request={request} />
                        : null
                }

                <NatureOfBusinessView request={request} />

                {
                    request.type === 'partnership' ?
                        <HideAddressView request={request} />
                        : null
                }

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

export default BusRegRequestView;