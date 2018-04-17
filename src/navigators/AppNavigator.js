/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/17 22:58
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator } from 'react-navigation';

import LoginScreen from '../pages/mine';
import MainScreen from '../pages/home';
import ProfileScreen from '../pages/find';
import { addListener } from '../utils/redux';

export const AppNavigator = StackNavigator({
    Login: { screen: LoginScreen },
    Main: { screen: MainScreen },
    Profile: { screen: ProfileScreen },
});

class AppWithNavigationState extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        nav: PropTypes.object.isRequired,
    };

    render() {
        const { dispatch, nav } = this.props;
        return (
            <AppNavigator
                navigation={{
                    dispatch,
                    state: nav,
                    addListener,
                }}
            />
        );
    }
}

const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);