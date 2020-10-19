import { reservationConstants } from '../constants';

const SAVE_DATA = reservationConstants.SAVE_DATA
const GENERATE_REF = reservationConstants.GENERATE_REF
const RESERVATION_REQUEST = reservationConstants.RESERVATION_REQUEST
const RESERVATION_FAILURE = reservationConstants.RESERVATION_FAILURE
const RESERVATION_SUCCESS = reservationConstants.RESERVATION_SUCCESS



export function reservationReducer(state = {
    loading: false,
    submitted: false,
    reservationData: null,
    transactionRef: ''
}, action) {
    switch (action.type) {
        case SAVE_DATA:
            return {
                ...state,
                loading: false,
                submitted: false,
                reservationData: action.data,
                transactionRef: state.transactionRef
            }
        case GENERATE_REF:
            return {
                ...state,
                loading: false,
                submitted: false,
                reservationData: state.reservationData,
                transactionRef: action.ref
            }
        case RESERVATION_REQUEST:
            return {
                ...state,
                loading: true,
                submitted: false,
                reservationData: state.reservationData,
                transactionRef: state.transactionRef
            }
        case RESERVATION_FAILURE:
            return {
                ...state,
                loading: false,
                submitted: false,
                reservationData: state.reservationData,
                transactionRef: state.transactionRef
            }
        case RESERVATION_SUCCESS:
            return {
                ...state,
                loading: false,
                submitted: true,
                reservationData: action.data,
                transactionRef: state.transactionRef
            }
        default:
            return state
    }
}
