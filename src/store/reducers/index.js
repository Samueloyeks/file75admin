import { combineReducers } from 'redux';

const { userReducer } = require('./userReducer');
const { alertReducer } = require('./alertReducer');
const { reservationReducer } = require('./reservationReducer');
const { requestReducer } = require('./requestReducer');
const { serviceReducer } = require('./serviceReducer');





const rootReducer = combineReducers({
    user: userReducer,
    alert: alertReducer,
    reserve: reservationReducer,
    requests: requestReducer,
    services: serviceReducer
});

export default rootReducer;