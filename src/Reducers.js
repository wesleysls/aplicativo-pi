import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import ChatReducer from './reducers/ChatReducer';
import NutriReducer from './reducers/NutriReducer';
import MitosReducer from './reducers/MitosReducer';

const Reducers = combineReducers({
	auth:AuthReducer,
	chat:ChatReducer,
	nutri:NutriReducer,
	mitos:MitosReducer
});

export default Reducers;