/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:59
 */
import React,{Component} from 'react'
import {connect} from 'react-redux'
import {NavigationActions} from "react-navigation";
import {View,Text,SafeAreaView,StatusBar,Button,ScrollView,StyleSheet}from 'react-native'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount() {
        this._navListener = this.props.navigation.addListener('didFocus', () => {
            StatusBar.setBarStyle('light-content');
            StatusBar.setBackgroundColor('#6a51ae');
        });
    }

    componentWillUnmount() {
        this._navListener.remove();
    }
    handPress=()=>{
        this.props.push('Login')
    };
    render() {
        return (
            <View>
                <Text onPress={this.handPress}>
                    我是我的页面
                </Text>
            </View>
        );
    }
}
const mapStateToProps=(state)=>{
    return{
        a:"ss"
    }
}
const mapDispatchToProps=(dispatch)=>({
    push(routeName){
        dispatch(NavigationActions.push({
            routeName:routeName
        }))
    }
})
export  default connect(mapStateToProps,mapDispatchToProps)(Index)