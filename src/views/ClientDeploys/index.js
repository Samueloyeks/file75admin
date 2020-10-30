
import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { requestActions, serviceActions } from '../../store/actions';
import './index.css';
import { getUser } from '../../helpers/auth';



// components 
import SearchBar from '../../components/atoms/SearchBar';
import RequestTable from '../../components/layouts/RequestTable';
import DeployView from '../../components/layouts/DeployView';


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
        deployRequest: (request) => dispatch(requestActions.deployRequest(request)),
        setActiveRequest: (request, index) => dispatch(requestActions.setActiveRequest(request, index)),
        clearActiveRequest: () => dispatch(requestActions.clearActiveRequest())
    };
}




class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedby: null,
        };
        this.interval = null;

        this.filterRequests = this.filterRequests.bind(this)
        this.searchFilterFunction = this.searchFilterFunction.bind(this)
        this.activate = this.activate.bind(this)
        this.close = this.close.bind(this)
        this.silentlyGetRequests = this.silentlyGetRequests.bind(this)
        this.handleDeployRequest = this.handleDeployRequest.bind(this)
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

    async handleDeployRequest(request) {
        // const { deployRequest } = this.props;

        // await deployRequest(request);
        // this.silentlyGetRequests()
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

    async componentDidMount() {
        const { getRequests, params, getServices,clearActiveRequest } = this.props;
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
        const { loading, requests, services, params, deploying, activeRequest, activeRequestIndex } = this.props;
        const { sortedby, } = this.state;

        return (
            <div>
                <Row style={{ margin: 0 }}>
                    <Col sm='6' className='border-right no-padding'>
                        <SearchBar
                            totalText="1,233 deployed"
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
                        />
                    </Col>
                    <Col sm='6' className='border-left no-padding'>
                        {
                            activeRequest ?
                                <DeployView
                                    request={activeRequest}
                                    close={this.close}
                                    deploying={deploying}
                                    deployRequest={this.handleDeployRequest}
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

