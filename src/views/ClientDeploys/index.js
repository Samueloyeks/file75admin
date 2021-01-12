
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { requestActions, serviceActions, alertActions } from '../../store/actions';
import './index.css';
import { getUser } from '../../helpers/auth';



// components 
import SearchBar from '../../components/atoms/SearchBar';
import DeployTable from '../../components/layouts/DeployTable';
import DeployView from '../../components/layouts/DeployView';
import CustomModal from '../../components/atoms/CustomModal';


function mapStateToProps(state) {
    const {
        loading,
        requests,
        params,
        finishing,
        rejecting,
        activeRequestIndex,
        activeRequest
    } = state.requests;
    const { services } = state.services;

    return {
        loading,
        requests,
        services,
        params,
        finishing, 
        rejecting,
        activeRequestIndex,
        activeRequest
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getRequests: (params) => dispatch(requestActions.getRequests(params)),
        getServices: () => dispatch(serviceActions.getServices()),
        finishRequest: (request, service) => dispatch(requestActions.finishRequest(request, service)),
        rejectRequest: (request, service) => dispatch(requestActions.rejectRequest(request, service)),
        setActiveRequest: (request, index) => dispatch(requestActions.setActiveRequest(request, index)),
        clearActiveRequest: () => dispatch(requestActions.clearActiveRequest())
    };
}




class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedby: null,
            uploadFiles: [],
            showModal: false,
            showRejectModal: false,
            preparedRequest: null
        };
        this.interval = null;

        this.filterRequests = this.filterRequests.bind(this)
        this.searchFilterFunction = this.searchFilterFunction.bind(this)
        this.activate = this.activate.bind(this)
        this.close = this.close.bind(this)
        this.silentlyGetRequests = this.silentlyGetRequests.bind(this)
        this.handleFinishRequest = this.handleFinishRequest.bind(this)
        this.handleRejectRequest = this.handleRejectRequest.bind(this)
        this.toggleConfirmModal = this.toggleConfirmModal.bind(this)
        this.toggleRejectModal = this.toggleRejectModal.bind(this)
    }

    async silentlyGetRequests() {
        const { params, getRequests } = this.props;
        params.getRequestsSilently = true;
        params.byAdminStatusCode = 'deployed';

        await getRequests(params);
    }

    async searchFilterFunction(text) {
        const { getRequests, params } = this.props;
        params.search = text
        params.byAdminStatusCode = 'deployed';

        await getRequests(params);
    };

    async handleFinishRequest() {
        const { preparedRequest, showModal } = this.state;
        const { finishRequest } = this.props;

        if (!preparedRequest.responseFiles || preparedRequest.responseFiles.length == 0) {
            this.setState({ showModal: !showModal });
            alertActions.error('Please attach document(s)');
            return;
        }

        this.setState({ showModal: !showModal });

        let service = null;
        if (preparedRequest.category.code === 'name_rsv') service = 'reservation'
        else if (preparedRequest.category.code === 'business_reg') service = 'businessReg'
        else service = 'reservation'

        await finishRequest(preparedRequest, service);
        this.silentlyGetRequests()
    };

    async handleRejectRequest() {
        const { preparedRequest, showRejectModal } = this.state;
        const { rejectRequest } = this.props;

        if (!preparedRequest.responseFiles || preparedRequest.responseFiles.length == 0) {
            this.setState({ showRejectModal: !showRejectModal });
            alertActions.error('Please attach document(s)');
            return;
        }

        this.setState({ showRejectModal: !showRejectModal });

        let service = null;
        if (preparedRequest.category.code === 'name_rsv') service = 'reservation'
        else if (preparedRequest.category.code === 'business_reg') service = 'businessReg'
        else service = 'reservation'

        await rejectRequest(preparedRequest, service);
        this.silentlyGetRequests()
    };

    async filterRequests(service) {
        const { getRequests, params } = this.props;

        if (service.category == 'All') {
            params.byCategorycode = null;
            this.setState({ sortedby: null });
        } else {
            params.byCategorycode = service.code;
            this.setState({ sortedby: service.category })
        }

        params.byAdminStatusCode = 'deployed';
        await getRequests(params);
    }

    activate(index) {
        const { requests, setActiveRequest } = this.props;
        const activeRequest = requests.find((req, reqindex) => reqindex == index);
        setActiveRequest(activeRequest, index)
    }

    close() {
        const { clearActiveRequest } = this.props;
        clearActiveRequest()
    }

    toggleConfirmModal(request) {
        const { showModal } = this.state

        this.setState({
            showModal: !showModal,
            preparedRequest: request
        })
    }

    toggleRejectModal(request) {
        const { showRejectModal } = this.state

        this.setState({
            showRejectModal: !showRejectModal,
            preparedRequest: request
        })
    }

    async componentDidMount() {
        const { getRequests, params, getServices, clearActiveRequest } = this.props;
        const userData = await getUser();
        params.byAdminId = userData.adminId;
        params.byAdminStatusCode = 'deployed';

        clearActiveRequest()
        await getRequests(params);
        await getServices();

        this.interval = setInterval(async () => {
            this.silentlyGetRequests()
        }, 90000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }

    render() {
        const { loading, requests, services, params, finishing, rejecting, activeRequest, activeRequestIndex } = this.props;
        const { sortedby, showModal, showRejectModal } = this.state;

        return (
            <div>
                <CustomModal
                    body='Are you sure you want to proceed?'
                    modal={showModal}
                    toggle={this.toggleConfirmModal}
                    action={this.handleFinishRequest}
                />
                <CustomModal
                    body='Are you sure you want to proceed?'
                    modal={showRejectModal}
                    toggle={this.toggleRejectModal}
                    action={this.handleRejectRequest}
                />
                <Row style={{ margin: 0 }}>
                    <Col sm='6' className='border-right no-padding'>
                        <SearchBar
                            totalText="1,233 deployed"
                            value={params.search}
                            search={this.searchFilterFunction}
                        />
                        <DeployTable
                            requests={requests}
                            services={services}
                            sortedby={sortedby}
                            loading={loading}
                            activateIndex={activeRequestIndex}
                            activate={this.activate}
                            filterRequests={this.filterRequests}
                        />
                    </Col>
                    <Col sm='6' className='border-left no-padding'>
                        {
                            activeRequest ?
                                <DeployView
                                    request={activeRequest}
                                    close={this.close}
                                    finishing={finishing}
                                    rejecting={rejecting}
                                    finishRequest={this.toggleConfirmModal}
                                    rejectRequest={this.toggleRejectModal}
                                />
                                :
                                null
                        }
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

