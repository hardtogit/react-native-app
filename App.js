/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */
// import React, { Component } from 'react';
// import { StackNavigator ,TabNavigator,addNavigationHelpers} from 'react-navigation'
// import {
//     createStore,
//     applyMiddleware,
//     combineReducers,
// } from 'redux';
// import { Provider, connect } from 'react-redux'
// import {
//     createReduxBoundAddListener,
//     createReactNavigationReduxMiddleware,
// } from 'react-navigation-redux-helpers';
// import HomeScreen from './src/pages/home';
// import FindScreen from './src/pages/find';
// import ProductScreen from './src/pages/product'
// import MineScreen from './src/pages/mine'
// import Detail from './src/pages/product/gather/detail'
// import tabIconOneDefault from './src/assets/img/tab1.png'
// import tabIconOneActive from './src/assets/img/tab1h.png'
// import tabIconTwoDefault from './src/assets/img/tab2.png'
// import tabIconTwoActive from './src/assets/img/tab2h.png'
// import tabIconThreeDefault from './src/assets/img/tab3.png'
// import tabIconThreeActive from './src/assets/img/tab3h.png'
// import tabIconFourDefault from './src/assets/img/tab4.png'
// import tabIconFourActive from './src/assets/img/tab4h.png'
// import {
//     Image,
//     StyleSheet
// } from 'react-native';
// const TabNavRoot=TabNavigator({home: {
//       screen: HomeScreen,
//         navigationOptions:({ navigation }) => ({
//             tabBarLabel:'首页',
//             tabBarIcon: ({focused}) => {
//               let icon=focused?tabIconOneActive:tabIconOneDefault;
//                   return <Image
//                       source={icon}
//                       style={styles.icon}
//                   />;
//             },
//         }),
//       },
//         product: {
//             screen: ProductScreen,
//             navigationOptions:({ navigation }) => ({
//                 tabBarLabel:'产品',
//                 tabBarIcon: ({focused}) => {
//                     let icon=focused?tabIconTwoActive:tabIconTwoDefault;
//                     return <Image
//                         source={icon}
//                         style={styles.icon}
//                     />;
//                 },
//             }),
//         },
//       find: {
//         screen: FindScreen,
//           navigationOptions:({ navigation }) => ({
//               tabBarLabel:'发现',
//               tabBarIcon: ({focused}) => {
//                   let icon=focused?tabIconThreeActive:tabIconThreeDefault;
//                   return <Image
//                       source={icon}
//                       style={styles.icon}
//                   />;
//               },
//           }),
//        },
//         mine: {
//             screen: MineScreen,
//             navigationOptions:({ navigation }) => ({
//                 tabBarLabel:'我的',
//                 tabBarIcon: ({focused}) => {
//                     let icon=focused?tabIconFourActive:tabIconFourDefault;
//                     return <Image
//                         source={icon}
//                         style={styles.icon}
//                     />;
//                 },
//             }),
//         },
//
//      },
//     {
//         headerMode: 'none',
//         tabBarPosition:'bottom',
//         tabBarOptions:{
//             activeTintColor:'#00a6e2',
//             inactiveTintColor:'#444',
//             showIcon:true,
//             padding:0,
//             margin:0,
//             labelStyle: {
//                 fontSize: 10,
//                 margin:0,
//                 marginBottom:8
//             },
//             iconStyle:{
//               width:20,
//               height:20,
//             },
//             indicatorStyle:{
//               backgroundColor:'#fff'
//             },
//             style:{
//               backgroundColor:'#fff',
//               height:50,
//                 padding:0
//             },
//         }
//     }
//    );
// const StackRouterRoot=StackNavigator({
//     Root:{
//         screen:TabNavRoot,
//         headerMode: 'block',
//     },
//     gatherDetail:{
//         screen:Detail,
//
//     },
//     initialRouteName: 'Root',
// },{
//     headerMode: 'none',
// });
//
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#F5FCFF',
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: 'center',
//         margin: 10,
//     },
//     instructions: {
//         textAlign: 'center',
//         color: '#333333',
//         marginBottom: 5,
//     },
//     icon: {
//         height: '100%',
//         width: '100%',
//         resizeMode: 'contain',
//     }
// });
// export default class  App extends Component{
//    render(){
//        return(
//            <StackRouterRoot></StackRouterRoot>
//        )
//    }
//
// }

import React from 'react';
import { AppRegistry } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import AppReducer from './src/reducers';
import AppWithNavigationState from './src/navigators/AppNavigator';
import { middleware } from './src/utils/redux';

const store = createStore(
    AppReducer,
    applyMiddleware(middleware),
);

class ReduxExampleApp extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AppWithNavigationState />
            </Provider>
        );
    }
}

AppRegistry.registerComponent('ReduxExample', () => ReduxExampleApp);

export default ReduxExampleApp;