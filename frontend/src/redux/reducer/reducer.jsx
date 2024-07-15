import { combineReducers } from 'redux';

import AuthSliceReducer from '../Slice/CheckAuthSlice'
import addEmailSliceReducer from '../Slice/addEmailSlice';
import DataSliceReducer from '../Slice/addPaymentDataSlice'
import countSliceReducer from '../Slice/countSlice'

const rootReducer = combineReducers({
    auth: AuthSliceReducer,
    email: addEmailSliceReducer,
    data:DataSliceReducer,
    count:countSliceReducer
});

export default rootReducer;
