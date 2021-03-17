import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ResidentialAddressView from './ResidentialAddressView';


const ShareholderPSCView = ({ shareholder }) => (
    <div>
        <div className='sub-header'>
            Shareholder PSC details
        </div>
        <Row className='p-4'>
            <Col sm='4'>
                <p className='file-text-bold no-margin file-text-small'>TAX RESIDENCY:</p>
                <CopyBox text={shareholder.taxResidency} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='12'>
                <p className='file-text-bold no-margin file-text-small'>HOLDING 5%:</p>
                <CopyBox text={shareholder.holding5Percent} />
            </Col>
        </Row>


        <Row className='p-4'>
            <Col sm='12'>
                <p className='file-text-bold no-margin file-text-small'>VOTING 5%:</p>
                <CopyBox text={shareholder.voting5Percent} />
            </Col>
        </Row>


        {
            shareholder.holding5Percent === 'yes' ?
                <Row className='p-4'>
                    <Col sm='6'>
                        <p className='file-text-bold no-margin file-text-small'>PERCENTAGE HELD DIRECTLY:</p>
                        <CopyBox text={shareholder.percentageHeldDirectly} />
                    </Col>

                    <Col sm='6'>
                        <p className='file-text-bold no-margin file-text-small'>PERCENTAGE HELD INDIRECTLY:</p>
                        <CopyBox text={shareholder.percentageHeldIndirectly} />
                    </Col>
                </Row>
                : null
        }

        {
            shareholder.voting5Percent === 'yes' ?
                <Row className='p-4'>
                    <Col sm='6'>
                        <p className='file-text-bold no-margin file-text-small'>VOTING HELD DIRECTLY:</p>
                        <CopyBox text={shareholder.votingHeldDirectly} />
                    </Col>

                    <Col sm='6'>
                        <p className='file-text-bold no-margin file-text-small'>VOTING HELD INDIRECTLY:</p>
                        <CopyBox text={shareholder.votingHeldIndirectly} />
                    </Col>
                </Row>
                : null
        }

        <Row className='p-4'>
            <Col sm='12'>
                <p className='file-text-bold no-margin file-text-small'>APPOINT AND REMOVE:</p>
                <CopyBox text={shareholder.appointAndRemove} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='12'>
                <p className='file-text-bold no-margin file-text-small'>INFLUENCE:</p>
                <CopyBox text={shareholder.influence} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='12'>
                <p className='file-text-bold no-margin file-text-small'>INDIVIDUAL INFLUENCE:</p>
                <CopyBox text={shareholder.IndividualInfluence} />
            </Col>
        </Row>


    </div>
)

export default ShareholderPSCView;