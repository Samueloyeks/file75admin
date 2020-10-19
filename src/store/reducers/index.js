import { combineReducers } from 'redux';

const { userReducer } = require('./userReducer');
const { alertReducer } = require('./alertReducer');
const { reservationReducer } = require('./reservationReducer');
const { taskReducer } = require('./taskReducer');
const { serviceReducer } = require('./serviceReducer');





const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer,
    reserve: reservationReducer,
    tasks: taskReducer,
    services: serviceReducer
});

export default rootReducer;