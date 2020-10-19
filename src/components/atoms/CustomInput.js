import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import './index.css'



const CustomInput = ({
    name,
    placeholder,
    value,
    type,
    onchange,
    ...rest
}) => (
        <Input
            className='custom-input'
            {...rest}
            name={name}
            placeholder={placeholder}
            value={value}
            type={type}
            onChange={onchange}
        />
    )

export default CustomInput;