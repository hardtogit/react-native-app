/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/17 23:00
 */
import {
    createReactNavigationReduxMiddleware,
    createReduxBoundAddListener,
} from 'react-navigation-redux-helpers';

const middleware = createReactNavigationReduxMiddleware(
    "root",
    state => state.nav,
);
const addListener = createReduxBoundAddListener("root");

export {
    middleware,
    addListener,
};