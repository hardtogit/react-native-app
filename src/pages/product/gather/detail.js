/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 22:46
 */
import React,{Component} from 'react'
import {View,Text,SafeAreaView,StatusBar,Button,ScrollView,StyleSheet}from 'react-native'
class Index extends Component{
    static navigationOptions = {
        title: 'Details',
    };
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
                    我是详情页
                </Text>
            </View>
        );
    }
}
export  default  Index