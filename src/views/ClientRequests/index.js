import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import './index.css';


// components 
import SeacrchBar from '../../components/atoms/SeacrchBar';
import RequestTable from '../../components/layouts/RequestTable';




export default class index extends Component {
    render() {
        return (
            <div>
                    <Row style={{margin:0}}>
                        <Col sm='6' className='border-right'>
                           <SeacrchBar/>
                           <RequestTable requests={requests}/>
                        </Col>
                        <Col sm='6'>
                            <p>details</p> 
                        </Col>
                    </Row>
            </div>
        )
    }
}

const requests = [
// {
//     status:
//     time:
//     client:
//     category:
// }
]
