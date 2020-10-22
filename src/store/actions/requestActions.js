import { requestConstants } from '../constants';
import { alertActions } from './alertActions';
import { requestService } from '../../services';

export const requestActions = {
    getRequests
};



function getRequests(params) {
    return dispatch => {
        dispatch(request(params));

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


    function request(params) { return { type: requestConstants.GET_REQUESTS_REQUEST,params } }
    function success(data) { return { type: requestConstants.GET_REQUESTS_SUCCESS, data } }
    function failure(data) { return { type: requestConstants.GET_REQUESTS_FAILURE, data } }
}





