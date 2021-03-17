import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const AuthorizedSignatoryView = ({ authotizedSignatory }) => (
    <div>
        <div className='sub-header'>
            Authorized Signatory
        </div>
        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>SURNAME:</p>
                <CopyBox text={authotizedSignatory.surname} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FIRST NAME:</p>
                <CopyBox text={authotizedSignatory.firstName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>OTHER NAME:</p>
                <CopyBox text={authotizedSignatory.otherName} />
            </Col>
        </Row>

        <div className='sub-header'>
            Alternative Name Information
        </div>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>NAME TYPE:</p>
                <CopyBox text={authotizedSignatory.alternativeNameinfo.nameType} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FULL NAME:</p>
                <CopyBox text={authotizedSignatory.alternativeNameinfo.fullName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>FAMILY NAME:</p>
                <CopyBox text={authotizedSignatory.alternativeNameinfo.familyName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GIVEN NAME:</p>
                <CopyBox text={authotizedSignatory.alternativeNameinfo.givenName} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>PATRONYMIC NAME:</p>
                <CopyBox text={authotizedSignatory.alternativeNameinfo.patronymicName} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='4' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>DATE OF BIRTH:</p>
                <CopyBox text={authotizedSignatory.dob} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>GENDER:</p>
                <CopyBox text={authotizedSignatory.sex} />
            </Col>
            <Col sm='4' >
                <p className='file-text-bold no-margin file-text-small'>NATIONALITY:</p>
                <CopyBox text={authotizedSignatory.nationality} />
            </Col>
        </Row>


        <Row className='p-4'>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>PASSPORT:</p>
                    <a href={authotizedSignatory.passport} download className="image-download">
                        <img src={authotizedSignatory.passport} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
            <Col sm='6' >
                <div className='image-download-container'>
                    <p className='file-text-bold no-margin file-text-small'>SIGNATURE:</p>
                    <a href={authotizedSignatory.signature} download className="image-download">
                        <img src={authotizedSignatory.signature} />
                        <div className="middle">
                            <div className="text">Download</div>
                        </div>
                    </a>
                </div>
            </Col>
        </Row>


        <ResidentialAddressView
            title='authotizedSignatory Residential Address'
            residentialAddress={authotizedSignatory.residentialAddress} />

    </div>
)

export default AuthorizedSignatoryView;