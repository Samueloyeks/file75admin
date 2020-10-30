import { requestConstants } from '../constants';

const GET_REQUESTS_REQUEST = requestConstants.GET_REQUESTS_REQUEST
const GET_REQUESTS_SILENTLY_REQUEST = requestConstants.GET_REQUESTS_SILENTLY_REQUEST
const GET_REQUESTS_FAILURE = requestConstants.GET_REQUESTS_FAILURE
const GET_REQUESTS_SUCCESS = requestConstants.GET_REQUESTS_SUCCESS

const DEPLOY_REQUEST_REQUEST = requestConstants.DEPLOY_REQUEST_REQUEST
const DEPLOY_REQUEST_FAILURE = requestConstants.DEPLOY_REQUEST_FAILURE
const DEPLOY_REQUEST_SUCCESS = requestConstants.DEPLOY_REQUEST_SUCCESS

const SET_ACTIVE_REQUEST = requestConstants.SET_ACTIVE_REQUEST
const CLEAR_ACTIVE_REQUEST = requestConstants.CLEAR_ACTIVE_REQUEST


export function requestReducer(state = {
    loading: false,
    refresh: false,
    getRequestsSilently: false,
    params: {
        associations: ["status", "category", "user", "adminStatus"],
        page: 1,
        perPage: 30,
        search: null,
        byUserId: null,
        byStatusCode: null,
        byAdminStatusCode: null,
        byCategorycode: null
    },
    total: 0,
    requests: [],
    deploying: false,
    activeRequestIndex: null,
    activeRequest: null
}, action) {
    switch (action.type) {
        case GET_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true,
                params: state.params
            }
        case GET_REQUESTS_SILENTLY_REQUEST:
            return {
                ...state,
                loading: false,
                getRequestsSilently: false,
                params: state.params
            }
        case GET_REQUESTS_FAILURE:
            return {
                ...state,
                loading: false,
                params: state.params
            }
        case GET_REQUESTS_SUCCESS:
            return {
                ...state,
                loading: false,
                params: state.params,
                requests: action.data
            }
        case DEPLOY_REQUEST_REQUEST:
            return {
                ...state,
                deploying: true,
            }
        case DEPLOY_REQUEST_FAILURE:
            return {
                ...state,
                deploying: false,
            }
        case DEPLOY_REQUEST_SUCCESS:
            return {
                ...state,
                deploying: false,
            }
        case SET_ACTIVE_REQUEST:
            return {
                ...state,
                activeRequest: action.request,
                activeRequestIndex: action.index
            }
        case CLEAR_ACTIVE_REQUEST:
            return {
                ...state,
                activeRequest: null,
                activeRequestIndex: null
            }
        default:
            return state
    }
}
