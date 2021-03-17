import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';
import ShareholderPSCView from './ShareholderPSCView';
import AuthorizedSignatoryView from './AuthorizedSignatoryView';
import ShareAllotmentView from './ShareAllotmentView';


const CorporateShareholderView = ({ index, corporateShareholder,title }) => (
    <div>
        <div className='sub-header'>
            {index + 1}) {title}
        </div>
        <Row className='p-4'>
            <Col sm='6' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>COMPANY NAME:</p>
                <CopyBox text={corporateShareholder.companyName} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>REG NUMBER:</p>
                <CopyBox text={corporateShareholder.regNumber} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PHONE:</p>
                <CopyBox text={corporateShareholder.phone} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={corporateShareholder.email} />
            </Col>
        </Row>


        {
            corporateShareholder.authotizedSignatory ?
                <AuthorizedSignatoryView authotizedSignatory={corporateShareholder.authotizedSignatory} />
                : null
        }


        <Row className='p-4'>
            <Col sm='6'>
                <p className='file-text-bold no-margin file-text-small'>PHONE NUMBER:</p>
                <CopyBox text={corporateShareholder.phone} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>EMAIL:</p>
                <CopyBox text={corporateShareholder.email} />
            </Col>
        </Row>




        <Row className='p-4'>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>TAX RESIDENCY:</p>
                <CopyBox text={corporateShareholder.taxResidency} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>GOVERNING LAW:</p>
                <CopyBox text={corporateShareholder.governingLaw} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='6'>
                <p className='file-text-bold no-margin file-text-small'>REGISTER:</p>
                <CopyBox text={corporateShareholder.register} />
            </Col>
            <Col sm='6' >
                <p className='file-text-bold no-margin file-text-small'>LEGAL FORM:</p>
                <CopyBox text={corporateShareholder.legalForm} />
            </Col>
        </Row>

        <ResidentialAddressView
            title='Shareholder Company Address'
            residentialAddress={corporateShareholder.companyAddress} />

        <ResidentialAddressView
            title='Shareholder Service Address'
            residentialAddress={corporateShareholder.serviceAddress} />

        {
            corporateShareholder.share ?
                <ShareAllotmentView share={corporateShareholder.share} />
                : null
        }

        {
            corporateShareholder.PSCType ?
                <ShareholderPSCView shareholder={corporateShareholder} />
                :
                null
        }

        <div className='sub-footer'></div>
    </div>
)

export default CorporateShareholderView;