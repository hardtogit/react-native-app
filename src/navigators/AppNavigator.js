/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/17 22:58
 */
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator,TabNavigator} from 'react-navigation';
import {Image,StyleSheet} from 'react-native'
import LoginScreen from '../pages/login';
import ProfileScreen from '../pages/find';
import { addListener } from '../utils/redux';
import HomeScreen from '../pages/home';
import FindScreen from '../pages/find';
import ProductScreen from '../pages/product'
import MineScreen from '../pages/mine'
import FeedBack from '../pages/ExchangeDiscounts'
import tabIconOneDefault from '../assets/img/tab1.png'
import tabIconOneActive from '../assets/img/tab1h.png'
import tabIconTwoDefault from '../assets/img/tab2.png'
import tabIconTwoActive from '../assets/img/tab2h.png'
import tabIconThreeDefault from '../assets/img/tab3.png'
import tabIconThreeActive from '../assets/img/tab3h.png'
import tabIconFourDefault from '../assets/img/tab4.png'
import tabIconFourActive from '../assets/img/tab4h.png'

 const TabNavRoot=TabNavigator({Home: {
       screen: HomeScreen,
         navigationOptions:({ navigation }) => ({
             tabBarLabel:'首页',
             tabBarIcon: ({focused}) => {
               let icon=focused?tabIconOneActive:tabIconOneDefault;
                   return <Image
                       source={icon}
                       style={styles.icon}
                   />;
             },
         }),
       },
         Product: {
             screen: ProductScreen,
             navigationOptions:({ navigation }) => ({
                 tabBarLabel:'产品',
                 tabBarIcon: ({focused}) => {
                     let icon=focused?tabIconTwoActive:tabIconTwoDefault;
                     return <Image
                         source={icon}
                         style={styles.icon}
                     />;
                 },
             }),
         },
       Find: {
         screen: FindScreen,
           navigationOptions:({ navigation }) => ({
               tabBarLabel:'发现',
               tabBarIcon: ({focused}) => {
                   let icon=focused?tabIconThreeActive:tabIconThreeDefault;
                   return <Image
                       source={icon}
                       style={styles.icon}
                   />;
               },
           }),
        },
         Mine: {
             screen: MineScreen,
             navigationOptions:({ navigation }) => ({
                 tabBarLabel:'我的',
                 tabBarIcon: ({focused}) => {
                     let icon=focused?tabIconFourActive:tabIconFourDefault;
                     return <Image
                         source={icon}
                         style={styles.icon}
                     />;
                 },
             }),
         },

      },
     {
         headerMode: 'none',
         tabBarPosition:'bottom',
         tabBarOptions:{
             activeTintColor:'#00a6e2',
             inactiveTintColor:'#444',
             showIcon:true,
             padding:0,
             margin:0,
             labelStyle: {
                 fontSize: 10,
                 margin:0,
                 marginBottom:8
             },
             iconStyle:{
               width:20,
               height:20,
             },
             indicatorStyle:{
               backgroundColor:'#fff'
             },
             style:{
               backgroundColor:'#fff',
               height:50,
                 padding:0
             },
         }
     }
    );


export const AppNavigator = StackNavigator({
    Root:{screen:TabNavRoot},
    Login: { screen: LoginScreen },
    Profile: { screen: ProfileScreen },
    FeedBack:{screen:FeedBack},
    initialRouteName:'Root',
    },
    {
        // headerMode: 'none',
    }
);

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
 const styles = StyleSheet.create({
     container: {
         flex: 1,
         justifyContent: 'center',
         alignItems: 'center',
         backgroundColor: '#F5FCFF',
     },
     welcome: {
         fontSize: 20,
         textAlign: 'center',
         margin: 10,
     },
     instructions: {
         textAlign: 'center',
         color: '#333333',
         marginBottom: 5,
     },
     icon: {
         height: '100%',
         width: '100%',
         resizeMode: 'contain',
     }
 });
const mapStateToProps = state => ({
    nav: state.nav,
});

export default connect(mapStateToProps)(AppWithNavigationState);