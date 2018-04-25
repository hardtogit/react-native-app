/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:59
 */
import React,{Component} from 'react'
import {NavigationActions} from "react-navigation";
import {View,Text,StyleSheet}from 'react-native'
class Index extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }
    componentDidMount() {

    }

    componentWillUnmount() {

    }
    handPress=()=>{
    };
    render() {
        return (
            <View style={styles.container}>
                <Text onPress={this.handPress}>
                    我是我的页面
                </Text>
            </View>
        );
    }
}
export default Index
const styles = StyleSheet.create({
    container:{
        flex:1
    }

})
