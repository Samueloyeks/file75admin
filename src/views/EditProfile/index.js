
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { requestActions, serviceActions } from '../../store/actions';
import './index.css';
import { getUser } from '../../helpers/auth';



// components 
import SearchBar from '../../components/atoms/SearchBar';
import RequestTable from '../../components/layouts/RequestTable';
import EditProfileView from '../../components/layouts/EditProfileView';
import CustomModal from '../../components/atoms/CustomModal';


function mapStateToProps(state) {
    const { userData } = state.user;

    return {
        userData
    }
}

function mapDispatchToProps(dispatch) {
    return {

    };
}




class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedby: null,
            showModal: false,
        };
        this.interval = null;

        this.toggleConfirmModal = this.toggleConfirmModal.bind(this)
    }


    close() {
        const { clearActiveRequest } = this.props;
        clearActiveRequest()
    }

    toggleConfirmModal(request) {
        const { showModal } = this.state
        this.setState({
            showModal: !showModal,
        })
    }


    render() {
        const { loading, requests, services, params, deploying, activeRequest, activeRequestIndex, userData } = this.props;
        const { sortedby, showModal } = this.state;
        
        return (
            <div>
                <CustomModal
                    body='Are you sure you want to proceed?'
                    modal={showModal}
                    toggle={this.toggleConfirmModal}
                    action={this.handleDeployRequest}
                />
                <Row style={{ margin: 0 }}>
                    <Col sm='6' className='border-left no-padding'>
                        <EditProfileView userData={userData} />
                    </Col>

                </Row>
            </div>
        )
    }
}



export default connect(
    mapStateToProps,
    mapDispatchToProps
)(index);

