import { taskConstants } from '../constants';
import { alertActions } from './alertActions';
import { taskService } from '../../services';

export const taskActions = {
    getTasks
};



function getTasks(params) {
    return dispatch => {
        dispatch(request(params));

        taskService.getTasks(params)
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


    function request(params) { return { type: taskConstants.GET_TASKS_REQUEST,params } }
    function success(data) { return { type: taskConstants.GET_TASKS_SUCCESS, data } }
    function failure(data) { return { type: taskConstants.GET_TASKS_FAILURE, data } }
}





