/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:59
 */
import React,{Component} from 'react'
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
    render() {
        return (
            <View>
                <Text>
                    我是产品页面
                </Text>
            </View>
        );
    }
}
export  default  Index