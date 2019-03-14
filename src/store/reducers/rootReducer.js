import authReducer from './authReducer'
import itemReducer from './itemReducer'
import moneyReducer from './moneyReducer'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
    auth: authReducer,
    items: itemReducer,
    money: moneyReducer
});

export default rootReducer
