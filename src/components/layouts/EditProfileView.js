import React, { Component } from 'react';
import { Row, Col, Input, Button, Spinner } from 'reactstrap';
import './index.css'
import UserAvatar from 'react-user-avatar';


// svg 



// components 
import CustomInput from '../atoms/CustomInput';




const EditProfileView = (props) => {
    
    return (
        <div>
            <Row className='p-3 border-bottom' style={{ backgroundColor: 'F5F5F5', marginLeft: 0 }}>
                <Col style={{ textAlign: 'left' }}>
                    <p className='file-text-bold' style={{ margin: 'unset' }}>Profile</p>
                </Col>
            </Row>


            <div style={{ backgroundColor: '#FFF' }}>
            <div className='pv-4 text-center'>
                <UserAvatar
                    className='user-avatar'
                    size="150"
                    name={props.userData.fullName}
                />
            </div>
                <Row className='ph-5 pv-3'>
                    <CustomInput
                    placeholder='Name'
                    value={props.userData.fullName}
                    />
                </Row>

                <Row className='ph-5 pv-3'>
                    <CustomInput
                    placeholder='Phone Number'
                    value={props.userData.phone}
                    />
                </Row>

                <div style={{ padding: 15 }}>
                    <Button
                        className='deploy-button'
                        // onClick={}
                    >Save
                        {/* {
                            editing ?
                                <Spinner />
                                :
                                'Deploy'
                        } */}
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default EditProfileView;