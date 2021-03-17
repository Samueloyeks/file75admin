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
import AddressView from './AddressView';
import MemorandumView from './MemorandumView';
import WitnessView from './WitnessView';
import DirectorView from './DirectorView';
import SecretaryView from './SecretaryView';
import ShareDetailsView from './ShareDetailsView';
import MultipleShareholdersView from './MultipleShareholdersView';
import MultiplePSCView from './MultiplePSCView';

function download(url) {
    var link = document.createElement('a');
    link.href = 'images.jpg';
    link.download = url;
    document.body.appendChild(link);
    link.click();
}

const CompanyRegRequestView = ({
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

            {/* info  */}
            <div style={{ backgroundColor: '#FFF' }}>
                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>AVAILABILITY CODE:</p>
                        <CopyBox text={request.availabilityCode} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>FIRST PREFERRED NAME:</p>
                        <CopyBox text={request.companyName1} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>SECOND PREFERRED NAME:</p>
                        <CopyBox text={request.companyName1} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                        <CopyBox text={request.phone} />
                    </Col>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                        <CopyBox text={request.email} />
                    </Col>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>REGISTRATION TYPE:</p>
                        <CopyBox text={request.type} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>ACTIVITY 1:</p>
                        <CopyBox text={request.businessActivity1} />
                    </Col>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>ACTIVITY 2:</p>
                        <CopyBox text={request.businessActivity2} />
                    </Col>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>ACTIVITY DESCRIPTION:</p>
                        <CopyBox text={request.businessActivityDescription} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>ADOPT CAC ARTICLE:</p>
                        <CopyBox text={request.adoptCACArticle ? 'Yes' : 'No'} />
                    </Col>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>ADDITIONAL COMMENT:</p>
                        <CopyBox text={request.additionalComment} />
                    </Col>
                    {
                        request.type === 'limited' ?
                            <Col sm='4'>
                                <p className='file-text-bold no-margin file-text-small'>COMPANY TYPE:</p>
                                <CopyBox text={request.companyType} />
                            </Col>
                            : null
                    }
                </Row>

                <AddressView address={request.registeredAddress} title={'REGISTERED ADDRESS'} />

                <AddressView address={request.headOfficeAddress} title={'HEAD OFFICE ADDRESS'} />

                <MemorandumView memorandum={request.objectsOfMemorandum} />

                <div className='sub-header'>
                    WITNESSES
                </div>
                {
                    request.articlesOfAssociation.witnesses ?
                        request.articlesOfAssociation.witnesses.map((witness, index) =>
                            <WitnessView witness={witness} index={index} key={index} />
                        )
                        : null
                }

                <div className='sub-header'>
                    DIRECTORS
                </div>
                {
                    request.directors ?
                        request.directors.map((director, index) =>
                            <DirectorView director={director} index={index} key={index} />
                        )
                        : null
                }

                <SecretaryView secretary={request.secretary} />

                <ShareDetailsView shareDetails={request.shareDetails} />

                <MultipleShareholdersView request={request} />

                <MultiplePSCView request={request} />



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

export default CompanyRegRequestView;