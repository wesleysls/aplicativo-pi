import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import ChatReducer from './reducers/ChatReducer';
import NutriReducer from './reducers/NutriReducer';

const Reducers = combineReducers({
	auth:AuthReducer,
	chat:ChatReducer,
	nutri:NutriReducer
});

export default Reducers;