import { taskConstants } from '../constants';

const GET_TASKS_REQUEST = taskConstants.GET_TASKS_REQUEST
const GET_TASKS_FAILURE = taskConstants.GET_TASKS_FAILURE
const GET_TASKS_SUCCESS = taskConstants.GET_TASKS_SUCCESS



export function taskReducer(state = {
    loading: false,
    refresh: false,
    params: {
        associations: ["status","category"],
        page: 1,
        perPage: 30,
        search: null,
        byUserId: null,
        byStatusCode: null,
        byCategorycode: null,
    },
    total: 0,
    tasks: []
}, action) { 
    switch (action.type) {
        case GET_TASKS_REQUEST:
            return {
                ...state,
                loading: true,
                params: state.params
            }
        case GET_TASKS_FAILURE:
            return {
                ...state,
                loading: false,
                params: state.params
            }
        case GET_TASKS_SUCCESS:
            return {
                ...state,
                loading: false,
                params: state.params,
                tasks: action.data
            }
        default:
            return state
    }
}
