import React, { Component, useState } from 'react';
import { Row, Col, Input, Button, InputGroup, InputGroupAddon, InputGroupText, } from 'reactstrap';
import './index.css'




const CustomInput = ({
    name,
    placeholder,
    value,
    type,
    onChange,
    search,
    ...rest
}) => {
    const [text, setText] = useState('');

    function updateText(e) {
        setText(e.target.value)
    }

    return (
        <div className='requestSearchContainer'>
            <Row>
                <Col sm='4' className='float-left'>
                    <p className='file-text-bold vertical-align-text file-text-large'>3,498 requests </p>
                </Col>
                <Col sm='8' style={{ margin: 'auto' }}>
                    {/* <Input
                        className='custom-input'
                        {...rest}
                        name={name}
                        placeholder={placeholder}
                        value={value}
                        type={type}
                    /> */}

                    <InputGroup>
                        <Input
                            placeholder="Search by email"
                            className='search-input'
                            type='search'
                            value={text}
                            onChange={(e) => updateText(e)}
                        />
                        <InputGroupAddon addonType='append'>
                            <Button className='search-button' onClick={() => search(text)}>Search</Button>
                        </InputGroupAddon>
                    </InputGroup>
                </Col>
            </Row>
        </div>

    )
}

export default CustomInput;