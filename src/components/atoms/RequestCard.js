import React from 'react';
import { Row, Col } from 'reactstrap';
import './index.css'

// svg 
import Clock from '../../assets/svg/Clock.svg';
import Unattended from '../../assets/svg/Unattended.svg';
import Deployed from '../../assets/svg/Deployed.svg';
import UploadGrey from '../../assets/svg/UploadGrey.svg';
import NRTag from '../../assets/svg/NRTag.svg';

// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';



const RequestCard = (props) => (
    <div
    className={`request-card  ${props.active ? 'active-card' : ''}`}
    onClick={()=>props.activate(props.index)}>
        <Row>
            <Col sm='3' style={{ margin: 'auto' }}>
                {
                    props.request.adminStatus.code === 'unattended' ?
                        <div><Clock /><Unattended /></div>
                        :
                        <div><UploadGrey /><Deployed /></div>
                }
            </Col>
            <Col sm='3' style={{margin:'auto'}}>
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
                {
                    props.request.category.code === 'name_rsv' ?
                        <NRTag />
                        :
                        null
                }
            </Col>
        </Row>
    </div>
)

export default RequestCard;