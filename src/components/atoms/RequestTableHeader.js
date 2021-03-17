import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';
import './index.css'
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';


// svg
import CaretDown from '../../assets/svg/CaretDown.svg'

const RequestTableHeader = (props) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const toggle = () => setDropdownOpen(prevState => !prevState);

    return (
        <Row className='table-header'>
            <Col sm='3'>
                <p className='file-text-bold vertical-align-text file-text-normal'>Status</p>
            </Col>
            <Col sm='3'>
                <p className='file-text-bold vertical-align-text file-text-normal'>Time</p>
            </Col>
            <Col sm='4'>
                <p className='file-text-bold vertical-align-text file-text-normal'>Client</p>
            </Col>
            <Col sm='2'>
                <Dropdown isOpen={dropdownOpen} toggle={toggle} className='avatar-dropdown'>
                    <DropdownToggle>

                        <p className='file-text-bold vertical-align-text file-text-normal file-secondary'>Filter <CaretDown /></p>

                    </DropdownToggle>
                    <DropdownMenu right>
                        {props.services.map((service, index) =>
                            <DropdownItem
                                key={index}
                                onClick={() => props.filterRequests(service)}>
                                {service.category}
                            </DropdownItem>
                        )}
                    </DropdownMenu>
                </Dropdown>
            </Col>
        </Row>
    )
}

export default RequestTableHeader;