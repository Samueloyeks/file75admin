import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { requestActions, serviceActions } from '../../store/actions';
import './index.css';
import { getUser } from '../../helpers/auth';



// components 
import SeacrchBar from '../../components/atoms/SeacrchBar';
import RequestTable from '../../components/layouts/RequestTable';
import RequestView from '../../components/layouts/RequestView';


function mapStateToProps(state) {
    const {
        loading,
        requests,
        params
    } = state.requests;
    const { services } = state.services;

    return {
        loading,
        requests,
        services,
        params
    };
}

function mapDispatchToProps(dispatch) {

    return {
        getRequests: (params) => dispatch(requestActions.getRequests(params)),
        getServices: () => dispatch(serviceActions.getServices())
    };
}



class index extends Component {

    constructor(props) {
        super(props);

        this.state = {
            sortedby: null,
            activeRequest: null,
            activeIndex: null
        };

        this.filterRequests = this.filterRequests.bind(this)
        this.searchFilterFunction = this.searchFilterFunction.bind(this)
        this.activate = this.activate.bind(this)
        this.close = this.close.bind(this)
    }


    async searchFilterFunction(text) {
        const { getRequests, params } = this.props;
        params.search = text

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

        await getRequests(params);
    }

    activate(index) {
        const { requests } = this.props;
        const activeRequest = requests.find((req, reqindex) => reqindex == index);
        this.setState({
            activeIndex: index,
            activeRequest
        })
    }

    close() {
        this.setState({
            activeIndex: null,
            activeRequest: null
        })
    }

    async componentDidMount() {
        const { getRequests, params, getServices } = this.props;
        const userData = await getUser();
        params.byAdminId = userData.adminId;

        await getRequests(params);
        await getServices();
    }

    render() {
        const { loading, requests, services, params } = this.props;
        const { sortedby, activeIndex, activeRequest } = this.state;

        return (
            <div>
                <Row style={{ margin: 0 }}>
                    <Col sm='6' className='border-right no-padding'>
                        <SeacrchBar
                            value={params.search}
                            search={this.searchFilterFunction}
                        />
                        <RequestTable
                            requests={requests}
                            services={services}
                            sortedby={sortedby}
                            loading={loading}
                            activateIndex={activeIndex}
                            activate={this.activate}
                            filterRequests={this.filterRequests}
                        />
                    </Col>
                    <Col sm='6' className='border-left no-padding'>
                        {
                            activeRequest ?
                                <RequestView
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

