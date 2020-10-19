import { serviceConstants } from '../constants';
import { alertActions } from './alertActions';
import { serviceService } from '../../services';

export const serviceActions = {
    getServices
};



function getServices(params) {
    return dispatch => {
        dispatch(request(params));

        serviceService.getServices(params)
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


    function request(params) { return { type: serviceConstants.GET_SERVICES_REQUEST,params } }
    function success(data) { return { type: serviceConstants.GET_SERVICES_SUCCESS, data } }
    function failure(data) { return { type: serviceConstants.GET_SERVICES_FAILURE, data } }
}





