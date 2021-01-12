
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { requestActions, serviceActions } from '../../store/actions';
import './index.css';
import { getUser } from '../../helpers/auth';



// components 
import SearchBar from '../../components/atoms/SearchBar';
import RequestTable from '../../components/layouts/FinishedTable';
import RequestView from '../../components/layouts/FinishedView';
import DeclinedTable from '../../components/layouts/DeclinedTable';
import FinishedView from '../../components/layouts/FinishedView';
import BusRegFinishedView from '../../components/layouts/BusRegFinishedView';
import IndividualRegFinishedView from '../../components/layouts/IndividualRegFinishedView';



function mapStateToProps(state) {
    const {
        loading,
        requests,
        params,
        activeRequestIndex,
        activeRequest
    } = state.requests;
    const { services } = state.services;

    return {
        loading,
        requests,
        services,
        params,
        activeRequestIndex,
        activeRequest
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getRequests: (params) => dispatch(requestActions.getRequests(params)),
        getServices: () => dispatch(serviceActions.getServices()),
        setActiveRequest: (request, index) => dispatch(requestActions.setActiveRequest(request, index)),
        clearActiveRequest: () => dispatch(requestActions.clearActiveRequest())
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
    }

    async silentlyGetRequests() {
        const { params, getRequests } = this.props;
        params.getRequestsSilently = true;
        params.byAdminStatusCode = 'finished';

        await getRequests(params);
    }

    async searchFilterFunction(text) {
        const { getRequests, params } = this.props;
        params.search = text
        params.byAdminStatusCode = 'finished';

        await getRequests(params);
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

        params.byAdminStatusCode = 'finished';
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


    async componentDidMount() {
        const { getRequests, params, getServices, clearActiveRequest } = this.props;
        const userData = await getUser();
        params.byAdminId = userData.adminId;
        params.byAdminStatusCode = 'rejected';

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
        const { loading, requests, services, params, activeRequest, activeRequestIndex } = this.props;
        const { sortedby, showModal } = this.state;

        let ActiveView = null;
        if (activeRequest && activeRequest.category.code === 'name_rsv') ActiveView = RequestView
        else if (activeRequest && activeRequest.category.code === 'business_reg') {
            if (activeRequest && activeRequest.type && activeRequest.type === 'company') ActiveView = BusRegFinishedView
            else if (activeRequest && activeRequest.type && activeRequest.type === 'individual') ActiveView = IndividualRegFinishedView
            else ActiveView = BusRegFinishedView
        }

        return (
            <div>
                <Row style={{ margin: 0 }}>
                    <Col sm='6' className='border-right no-padding'>
                        <SearchBar
                            totalText="3,498 Pending"
                            value={params.search}
                            search={this.searchFilterFunction}
                        />
                        <DeclinedTable
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
                                <ActiveView
                                    request={activeRequest}
                                    close={this.close}
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

