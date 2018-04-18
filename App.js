
import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';
import createSagaMiddleware from 'redux-saga'
import { helloSaga } from './src/sagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    AppReducer,
    applyMiddleware(middleware,sagaMiddleware),
);
sagaMiddleware.run(helloSaga)
class ReduxExampleApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}
export default ReduxExampleApp;