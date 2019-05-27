import {
    combineReducers
} from 'redux';
import topList from './topList';
import detail from './details'
import user from './userReducer'
 let reducers = combineReducers({
    topList,
    detail,
    user
})
export default reducers;