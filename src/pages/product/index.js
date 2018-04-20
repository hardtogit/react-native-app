/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:59
 */
import React,{Component} from 'react'
import {View,Text,StatusBar}from 'react-native'
import {connect}from 'react-redux'
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
    handlePress=()=>{
        this.props.test();
    }
    render() {
        console.log(this.props)
        return (
            <View>
                <Text onPress={this.handlePress}>
                    我是产品页面
                </Text>
            </View>
        );
    }
}
const mapStateToProps=(state)=>{
    console.log(state)
    return{
        productListData:state.listData.TEST
    }
};
const mapDispatchToProps=(dispatch)=>({
    test(){
        dispatch({
            type:'TEST',
            params:'dade'
        })
    }
})
export  default connect(mapStateToProps,mapDispatchToProps)(Index)