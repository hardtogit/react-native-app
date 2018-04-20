/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/17 22:53
 */
import { combineReducers } from 'redux';
import nav from './nav.js';
import listData from './listData'

const AppReducer = combineReducers({
    nav,
    listData
});

export default AppReducer;