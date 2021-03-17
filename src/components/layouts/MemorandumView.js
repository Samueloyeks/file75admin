import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'



// components 
import DateText from '../atoms/DateText';
import TimeText from '../atoms/TimeText';
import CopyBox from '../atoms/CopyBox';
import ListBox from '../atoms/ListBox';



const MemorandumView = ({ memorandum }) => (
    <div>
        <div className='sub-header'>
           OBJECTS OF MEMORANDUM
        </div>

        <Row className='p-4'>
            <Col sm='12' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>BUSINESS CATEGORY:</p>
                <CopyBox text={memorandum.businessCategory} />
            </Col>
        </Row>

        <Row className='p-4'>
            <Col sm='12' style={{ margin: 'auto' }}>
                <p className='file-text-bold no-margin file-text-small'>PRINCIPAL ACTIVITY DESCRIPTION:</p>
                <ListBox list={memorandum.businessObject} />
            </Col>
        </Row>

    </div>
)

export default MemorandumView;