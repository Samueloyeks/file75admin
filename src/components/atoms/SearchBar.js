import React, { useState } from 'react';
import { Row, Col, Input, Button, InputGroup, InputGroupAddon } from 'reactstrap';
import './index.css'




const CustomInput = ({
    name,
    placeholder,
    value,
    type,
    onChange,
    search,
    totalText,
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
                    <p className='file-text-bold vertical-align-text file-text-large'>{totalText} </p>
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