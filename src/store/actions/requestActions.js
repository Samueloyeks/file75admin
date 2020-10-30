import { requestConstants } from '../constants';
import { alertActions } from './alertActions';
import { requestService } from '../../services';

export const requestActions = {
    getRequests,
    deployRequest,
    setActiveRequest,
    clearActiveRequest
};



function getRequests(params) {
    return dispatch => {
        if (params.getRequestsSilently) {
            dispatch(requestSilently(params))
        } else {
            dispatch(request(params));
        }

        requestService.getRequests(params)
            .then(resp => {
                if (resp && resp.data) {
                    dispatch(success(resp.data.result));
                } else {
                    dispatch(failure('error'));
                    dispatch(alertActions.error('Error'));
                }
            }, error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            })
    }


    function request(params) { return { type: requestConstants.GET_REQUESTS_REQUEST, params } }
    function requestSilently(params) { return { type: requestConstants.GET_REQUESTS_SILENTLY_REQUEST, params } }
    function success(data) { return { type: requestConstants.GET_REQUESTS_SUCCESS, data } }
    function failure(data) { return { type: requestConstants.GET_REQUESTS_FAILURE, data } }
}

function deployRequest(requestInfo) {
    return dispatch => {
        dispatch(request(requestInfo));

        requestService.deployRequest(requestInfo)
            .then(resp => {
                if (resp && resp.data) {
                    dispatch(success(resp.data.result));
                    dispatch(clearRequest());
                } else {
                    dispatch(failure('error'));
                    dispatch(alertActions.error('Error'));
                }
            }, error => {
                dispatch(failure(error.toString()));
                dispatch(alertActions.error(error.toString()));
            })
    }


    function request(requestInfo) { return { type: requestConstants.DEPLOY_REQUEST_REQUEST, requestInfo } }
    function success(data) { return { type: requestConstants.DEPLOY_REQUEST_SUCCESS, data } }
    function failure(data) { return { type: requestConstants.DEPLOY_REQUEST_FAILURE, data } }
    function clearRequest(request, index) { return { type: requestConstants.CLEAR_ACTIVE_REQUEST } }
}

function setActiveRequest(request, index) {
    return dispatch => {
        dispatch(setRequest(request, index));
    }

    function setRequest(request, index) { return { type: requestConstants.SET_ACTIVE_REQUEST, request, index } }
}

function clearActiveRequest() {
    return dispatch => {
        dispatch(clearRequest());
    }

    function clearRequest(request, index) { return { type: requestConstants.CLEAR_ACTIVE_REQUEST } }
}





