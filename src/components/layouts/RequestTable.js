import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import './index.css'


// components 
import RequestTableHeader from '../atoms/RequestTableHeader';
import RequestCard from '../atoms/RequestCard';



const RequestTable = ({
    name,
    placeholder,
    value,
    type,
    requests,
    ...rest
}) => (
        <div>
            <RequestTableHeader/>
            <RequestCard requests={requests}/>
        </div>
    )

export default RequestTable;