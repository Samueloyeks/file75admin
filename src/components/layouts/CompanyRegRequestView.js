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
                </Row>

                <div className='sub-header'>
                    COMPANY PARTICULARS
                </div>

                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>NATURE OF BUSINESS:</p>
                        <CopyBox text={request.businessCategory} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>REGISTERED OFFICE ADDRESS:</p>
                        <CopyBox text={request.officeAddress} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>HEAD OFFICE ADDRESS:</p>
                        <CopyBox text={request.headOfficeAddress} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4'>
                        <p className='file-text-bold no-margin file-text-small'>EMAIL ADDRESS:</p>
                        <CopyBox text={request.companyEmail} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>COMPANY TYPE:</p>
                        <CopyBox text={request.companyType} />
                    </Col>

                </Row>

                <Row className='p-4'>
                    {
                        request.shareCapitalUnits ?
                            <Col sm='4'>
                                <p className='file-text-bold no-margin file-text-small'>SHARE UNITS:</p>
                                <CopyBox text={request.shareCapitalUnits} />
                            </Col> : null
                    }
                    {
                        request.pricePerShare ?
                            <Col sm='4' >
                                <p className='file-text-bold no-margin file-text-small'>PRICE PER SHARE:</p>
                                <CopyBox text={request.pricePerShare} />
                            </Col> : null
                    }

                    {
                        request.valueOfShares ?
                            <Col sm='4' >
                                <p className='file-text-bold no-margin file-text-small'>VALUE OF SHARES:</p>
                                <CopyBox text={request.valueOfShares} />
                            </Col> : null
                    }
                </Row>

                <Row className='p-4'>
                    {
                        request.totalGuarantee ?
                            <Col sm='4' >
                                <p className='file-text-bold no-margin file-text-small'>TOTAL GUARANTEE:</p>
                                <CopyBox text={request.totalGuarantee} />
                            </Col> : null
                    }
                    {
                        request.type !== '' ?
                            <Col sm='8' >
                                <p className='file-text-bold no-margin file-text-small'>TYPE:</p>
                                <CopyBox text={request.type} />
                            </Col> : null
                    }
                </Row>

                <div className='sub-header'>
                    DIRECTORS
                </div>

                {
                    request.directors.map((director) =>
                        <div>
                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>NAME:</p>
                                    <CopyBox text={director.fullName} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                                    <CopyBox text={director.dob} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                                    <CopyBox text={director.sex} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                                    <CopyBox text={director.phone} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                                    <CopyBox text={director.country} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>STATE:</p>
                                    <CopyBox text={director.state} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>IDENTIFICATION TYPE:</p>
                                    <CopyBox text={director.documentType} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>ID NO:</p>
                                    <CopyBox text={director.documentId} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>COUNTRY OF RESIDENCE:</p>
                                    <CopyBox text={director.residence} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4'>
                                    <p className='file-text-bold no-margin file-text-small'>EMAIL ADDRESS:</p>
                                    <CopyBox text={director.email} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='6' >
                                    <div className='image-download-container'>
                                        <p className='file-text-bold no-margin file-text-small'>UPLOADED IMAGE:</p>
                                        <a href={director.document} download className="image-download">
                                            <img src={director.document} />
                                            <div class="middle">
                                                <div class="text">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>

                                <Col sm='6' >
                                    <div className='image-download-container'>
                                        <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                                        <a href={director.signature} download className="image-download">
                                            <img src={director.signature} />
                                            <div class="middle">
                                                <div class="text">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    )
                }

                {
                    request.shareholders && request.shareholders.length > 0 ?
                        <div className='sub-header'>
                            SHAREHOLDERS
                </div> : null
                }

                {
                    request.shareholders && request.shareholders.map((shareholder) =>
                        <div>
                            <div className='sub-header'>
                                SHAREHOLDERS
                            </div>
                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>NAME:</p>
                                    <CopyBox text={shareholder.fullName} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                                    <CopyBox text={shareholder.dob} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                                    <CopyBox text={shareholder.sex} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                                    <CopyBox text={shareholder.phone} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                                    <CopyBox text={shareholder.country} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>STATE:</p>
                                    <CopyBox text={shareholder.state} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>IDENTIFICATION TYPE:</p>
                                    <CopyBox text={shareholder.documentType} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>ID NO:</p>
                                    <CopyBox text={shareholder.documentId} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>COUNTRY OF RESIDENCE:</p>
                                    <CopyBox text={shareholder.residence} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>SHARES IN UNITS:</p>
                                    <CopyBox text={shareholder.sharesInUnits} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>SHARES PERCENTAGE:</p>
                                    <CopyBox text={shareholder.sharesPercentage} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>CITY:</p>
                                    <CopyBox text={shareholder.city} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4'>
                                    <p className='file-text-bold no-margin file-text-small'>EMAIL ADDRESS:</p>
                                    <CopyBox text={shareholder.email} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='6' >
                                    <div className='image-download-container'>
                                        <p className='file-text-bold no-margin file-text-small'>UPLOADED IMAGE:</p>
                                        <a href={shareholder.document} download className="image-download">
                                            <img src={shareholder.document} />
                                            <div class="middle">
                                                <div class="text">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>

                                <Col sm='6' >
                                    <div className='image-download-container'>
                                        <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                                        <a href={shareholder.signature} download className="image-download">
                                            <img src={shareholder.signature} />
                                            <div class="middle">
                                                <div class="text">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    )
                }

                {
                    request.guarantors && request.guarantors.length > 0 ?
                        <div className='sub-header'>
                            GUARANTORS
                </div> : null
                }

                {
                    request.guarantors && request.guarantors.map((guarantor) =>
                        <div>
                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>NAME:</p>
                                    <CopyBox text={guarantor.fullName} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                                    <CopyBox text={guarantor.dob} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                                    <CopyBox text={guarantor.sex} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                                    <CopyBox text={guarantor.phone} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                                    <CopyBox text={guarantor.country} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>STATE:</p>
                                    <CopyBox text={guarantor.state} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>IDENTIFICATION TYPE:</p>
                                    <CopyBox text={guarantor.documentType} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>ID NO:</p>
                                    <CopyBox text={guarantor.documentId} />
                                </Col>
                                <Col sm='4' >
                                    <p className='file-text-bold no-margin file-text-small'>COUNTRY OF RESIDENCE:</p>
                                    <CopyBox text={guarantor.residence} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>AMOUNT GUARANTEED:</p>
                                    <CopyBox text={guarantor.amountGuaranteed} />
                                </Col>
                                <Col sm='8' >
                                    <p className='file-text-bold no-margin file-text-small'>AMOUNT GUARANTEED IN WORDS:</p>
                                    <CopyBox text={guarantor.amountGuaranteedWords} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='4'>
                                    <p className='file-text-bold no-margin file-text-small'>EMAIL ADDRESS:</p>
                                    <CopyBox text={guarantor.email} />
                                </Col>
                                <Col sm='4' style={{ margin: 'auto' }}>
                                    <p className='file-text-bold no-margin file-text-small'>CITY:</p>
                                    <CopyBox text={guarantor.city} />
                                </Col>
                            </Row>

                            <Row className='p-4'>
                                <Col sm='6' >
                                    <div className='image-download-container'>
                                        <p className='file-text-bold no-margin file-text-small'>UPLOADED IMAGE:</p>
                                        <a href={guarantor.document} download className="image-download">
                                            <img src={guarantor.document} />
                                            <div class="middle">
                                                <div class="text">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>

                                <Col sm='6' >
                                    <div className='image-download-container'>
                                        <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                                        <a href={guarantor.signature} download className="image-download">
                                            <img src={guarantor.signature} />
                                            <div class="middle">
                                                <div class="text">Download</div>
                                            </div>
                                        </a>
                                    </div>
                                </Col>
                            </Row>
                            <hr />
                        </div>
                    )
                }


                <div className='sub-header'>
                    SECRETARY
                </div>
                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>NAME:</p>
                        <CopyBox text={request.secretary.fullName} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>ADDRESS:</p>
                        <CopyBox text={request.secretary.address} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                        <CopyBox text={request.secretary.dob} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                        <CopyBox text={request.secretary.phone} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                        <CopyBox text={request.secretary.email} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>SECRETARY TYPE:</p>
                        <CopyBox text={request.secretary.secretaryType} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>IDENTIFICATION TYPE:</p>
                        <CopyBox text={request.secretary.documentType} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>ID NO:</p>
                        <CopyBox text={request.secretary.documentId} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>REG NUMBER TYPE:</p>
                        <CopyBox text={request.secretary.numberType} />
                    </Col>
                </Row>

                <Row className='p-4'>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>REG NUMBER:</p>
                        <CopyBox text={request.secretary.regNumber} />
                    </Col>
                </Row>

                <Row className='p-4'>

                    <Col sm='6' >
                        <div className='image-download-container'>
                            <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                            <a href={request.secretary.signature} download className="image-download">
                                <img src={request.secretary.signature} />
                                <div class="middle">
                                    <div class="text">Download</div>
                                </div>
                            </a>
                        </div>
                    </Col>
                </Row>

                <div className='sub-header'>
                    WITNESS
                </div>
                <Row className='p-4'>
                    <Col sm='4' style={{ margin: 'auto' }}>
                        <p className='file-text-bold no-margin file-text-small'>NAME:</p>
                        <CopyBox text={request.witnessName} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>ADDRESS:</p>
                        <CopyBox text={request.witnessAddress} />
                    </Col>
                    <Col sm='4' >
                        <p className='file-text-bold no-margin file-text-small'>OCCUPATION:</p>
                        <CopyBox text={request.witnessOccupation} />
                    </Col>
                </Row>

                <Row className='p-4'>

                    <Col sm='6' >
                        <div className='image-download-container'>
                            <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                            <a href={request.witnessSignature} download className="image-download">
                                <img src={request.witnessSignature} />
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

export default CompanyRegRequestView;