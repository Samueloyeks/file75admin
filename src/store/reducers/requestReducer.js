import { requestConstants } from '../constants';

const GET_REQUESTS_REQUEST = requestConstants.GET_REQUESTS_REQUEST
const GET_REQUESTS_FAILURE = requestConstants.GET_REQUESTS_FAILURE
const GET_REQUESTS_SUCCESS = requestConstants.GET_REQUESTS_SUCCESS



export function requestReducer(state = {
    loading: false,
    refresh: false,
    params: {
        associations: ["status","category","user","adminStatus"],
        page: 1,
        perPage: 30,
        search: null,
        byUserId: null,
        byStatusCode: null,
        byCategorycode: null,
    },
    total: 0,
    requests: []
}, action) { 
    switch (action.type) {
        case GET_REQUESTS_REQUEST:
            return {
                ...state,
                loading: true,
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
        default:
            return state
    }
}
