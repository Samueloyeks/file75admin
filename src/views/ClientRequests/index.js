
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { requestActions, serviceActions } from '../../store/actions';
import './index.css';
import { getUser } from '../../helpers/auth';



// components 
import SearchBar from '../../components/atoms/SearchBar';
import RequestTable from '../../components/layouts/RequestTable';
import RequestView from '../../components/layouts/RequestView';
import BusRegRequestView from '../../components/layouts/BusRegRequestView';
import CompanyRegRequestView from '../../components/layouts/CompanyRegRequestView';
import IndividualRegRequestView from '../../components/layouts/IndividualRegRequestView';
import CustomModal from '../../components/atoms/CustomModal';



function mapStateToProps(state) {
    const {
        loading,
        requests,
        params,
        deploying,
        activeRequestIndex,
        activeRequest
    } = state.requests;
    const { services } = state.services;

    return {
        loading,
        requests,
        services,
        params,
        deploying,
        activeRequestIndex,
        activeRequest
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getRequests: (params) => dispatch(requestActions.getRequests(params)),
        getServices: () => dispatch(serviceActions.getServices()),
        deployRequest: (request, service) => dispatch(requestActions.deployRequest(request, service)),
        setActiveRequest: (request, index) => dispatch(requestActions.setActiveRequest(request, index)),
        clearActiveRequest: () => dispatch(requestActions.clearActiveRequest()),
        removeRequest: (id) => dispatch(requestActions.removeRequest(id))
    };
}




class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedby: null,
            showModal: false,
            preparedRequest: null
        };
        this.interval = null;

        this.filterRequests = this.filterRequests.bind(this)
        this.searchFilterFunction = this.searchFilterFunction.bind(this)
        this.activate = this.activate.bind(this)
        this.close = this.close.bind(this)
        this.silentlyGetRequests = this.silentlyGetRequests.bind(this)
        this.handleDeployRequest = this.handleDeployRequest.bind(this)
        this.toggleConfirmModal = this.toggleConfirmModal.bind(this)
        this.handleLoadMore = this.handleLoadMore.bind(this)
    }

    async silentlyGetRequests() {
        const { params, getRequests } = this.props;
        params.getRequestsSilently = true;
        params.byAdminStatusCode = 'unattended';

        await getRequests(params);
        params.getRequestsSilently = false;
    }

    async handleLoadMore() {
        const { params, getRequests } = this.props;
        const userData = await getUser();

        params.byAdminId = userData.adminId;
        params.getRequestsSilently = true;
        params.byAdminStatusCode = 'unattended';
        params.page = params.page + 1;

        getRequests(params);
        params.getRequestsSilently = false;
    };

    async searchFilterFunction(text) {
        const { getRequests, params } = this.props;
        params.search = text
        params.byAdminStatusCode = 'unattended';
        params.page = 1

        await getRequests(params);
    };

    async handleDeployRequest() {
        const { preparedRequest, showModal } = this.state;
        const { deployRequest, removeRequest } = this.props;

        this.setState({ showModal: !showModal });

        let service = null;
        if (preparedRequest.category.code === 'name_rsv') service = 'reservation'
        else if (preparedRequest.category.code === 'business_reg') service = 'businessReg'
        else if (preparedRequest.category.code === 'company_reg') service = 'companyReg'
        else service = 'reservation'

        await deployRequest(preparedRequest, service);
        removeRequest(preparedRequest._id);
        // this.silentlyGetRequests()
    };

    async filterRequests(service) {
        const { getRequests, params } = this.props;

        if (service.category == 'All') {
            params.byCategorycode = null;
            this.setState({ sortedby: null });
        } else {
            params.byCategorycode = service.code;
            this.setState({ sortedby: service.category });
        }

        params.byAdminStatusCode = 'unattended';
        params.page = 1
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

    async componentDidMount() {
        const { getRequests, params, getServices, clearActiveRequest } = this.props;
        const userData = await getUser();
        params.byAdminId = userData.adminId;
        params.byAdminStatusCode = 'unattended';
        params.page = 1;
        params.getRequestsSilently = false;

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
        const { loading, requests, services, params, deploying, activeRequest, activeRequestIndex } = this.props;
        const { sortedby, showModal } = this.state;

        let ActiveView = null;
        if (activeRequest && activeRequest.category.code === 'name_rsv') ActiveView = RequestView
        else if (activeRequest && activeRequest.category.code === 'business_reg') {
            if (activeRequest && activeRequest.type && activeRequest.type === 'company') ActiveView = BusRegRequestView
            else if (activeRequest && activeRequest.type && activeRequest.type === 'individual') ActiveView = IndividualRegRequestView
            else ActiveView = BusRegRequestView
        } else if (activeRequest && activeRequest.category.code === 'company_reg') {
            if (activeRequest && activeRequest.type && activeRequest.type === 'limited') ActiveView = CompanyRegRequestView
            else if (activeRequest && activeRequest.type && activeRequest.type === 'unlimited') ActiveView = IndividualRegRequestView
            else if (activeRequest && activeRequest.type && activeRequest.type === 'limitedByGuarantee') ActiveView = CompanyRegRequestView
            else ActiveView = BusRegRequestView
        }


        if(Array.isArray(requests)){
            requests.sort(function (a, b) {
                return new Date(b.created_at) - new Date(a.created_at);
            });
        }

        return (
            <div>
                <CustomModal
                    body='Are you sure you want to proceed?'
                    modal={showModal}
                    toggle={this.toggleConfirmModal}
                    action={this.handleDeployRequest}
                />

                <Row style={{ margin: 0, height: '100vh' }}>
                    <Col scrolling sm='6' className='border-right no-padding scrollable'>
                        <SearchBar
                            totalText="3,498 Pending"
                            value={params.search}
                            search={this.searchFilterFunction}
                        />
                        <RequestTable
                            requests={requests}
                            services={services}
                            sortedby={sortedby}
                            loading={loading}
                            activateIndex={activeRequestIndex}
                            activate={this.activate}
                            filterRequests={this.filterRequests}
                            handleLoadMore={this.handleLoadMore}
                        />
                    </Col>
                    <Col scrolling sm='6' className='border-left no-padding scrollable' style={{ paddingBottom: 50 }}>
                        {
                            activeRequest ?
                                <ActiveView
                                    request={activeRequest}
                                    close={this.close}
                                    deploying={deploying}
                                    deployRequest={this.toggleConfirmModal}
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

