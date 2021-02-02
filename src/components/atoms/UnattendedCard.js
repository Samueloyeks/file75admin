import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import './index.css'

// svg 
import Clock from '../../assets/svg/Clock.svg';
import Unattended from '../../assets/svg/Unattended.svg';
import Deployed from '../../assets/svg/Deployed.svg';
import UploadGrey from '../../assets/svg/UploadGrey.svg';
import NRTag from '../../assets/svg/NRTag.svg';
import BNRITag from '../../assets/svg/BNRITag.svg';
import BNRCOMTag from '../../assets/svg/BNRCOMTag.svg';
import CRTag from '../../assets/svg/CRTag.svg';


// components 
import DateText from './DateText';
import TimeText from './TimeText';



const UnattendedCard = (props) => {
    let Tag = null;
    if (props.request.category.code === 'name_rsv') Tag = NRTag;
    if (props.request.category.code === 'business_reg') {
        if (props.request.type === 'partnership') Tag = BNRCOMTag;
        else if (props.request.type === 'soleProprietorship') Tag = BNRITag;
        else Tag = BNRCOMTag;
    }
    if (props.request.category.code === 'company_reg') Tag = CRTag;

    return (
        <div
            className={`request-card  ${props.active ? 'active-card' : ''}`}
            onClick={() => props.activate(props.index)}>
            <Row>
                <Col sm='3' style={{ margin: 'auto' }}>
                    <div><Clock /><Unattended /></div>
                </Col>
                <Col sm='3' style={{ margin: 'auto' }}>
                    <DateText class='file-text-bold file-text-normal vertical-align-text' dateString={props.request.submitted} />
                    <TimeText class='file-text-bold file-text-normal ' dateString={props.request.submitted} />
                </Col>
                <Col sm='4'>
                    <p className='file-text-bold file-text-normal vertical-align-text' style={{ textTransform: 'uppercase' }}>
                        {props.request.user.fullName}
                    </p>
                    <p className='file-text-small file-secondary'>{props.request.user.email}</p>
                </Col>
                <Col sm='2' style={{ textAlign: 'center' }}>
                    <Tag />
                </Col>
            </Row>
        </div>
    )
}

export default UnattendedCard;