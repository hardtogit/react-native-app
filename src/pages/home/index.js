/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:17
 */
import React,{Component} from 'react'
import {View,Text,SafeAreaView,StatusBar,Button,ScrollView,StyleSheet}from 'react-native'
import {NavigationActions} from "react-navigation";
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
            <SafeAreaView style={[styles.container, { backgroundColor: '#6a51ae' }]}>
                <StatusBar
                    barStyle="light-content"
                    backgroundColor="#6a51ae"
                />
                <Text style={[styles.paragraph, { color: '#fff' }]}>
                    Light Screen
                </Text>
                <Button
                    title="Next screen"
                    onPress={() => {this.props.navigation.dispatch(NavigationActions.back())}}
                    color={"blue"}
                />
            </SafeAreaView>
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
        height: 22,
        width: 22,
        resizeMode: 'contain'
    }
});
export default Index