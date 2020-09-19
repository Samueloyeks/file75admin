import React, { Component } from 'react';
import {Row, Col} from 'reactstrap'
import Cooking from '../../svg/Cooking.svg';

export default class index extends Component {
    render() {
        return (
            <div className='p-5'>
                <Row>
                    <Col sm='8'>
                        <Cooking/>
                    </Col>

                    <Col sm='4 '>
                    </Col>
                </Row>
            </div>
        )
    }
}
