/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:59
 */
import React,{Component} from 'react'
import  color from '../../utils/color';
import {View,Text,StyleSheet,TouchableHighlight,Dimensions,TextInput,Image}from 'react-native'
import write from '../../assets/img/write.png'
class Index extends Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'意见与反馈',
        headerTitleStyle: { fontSize: 18, color: color.fontColor},
        headerStyle: {
            backgroundColor:color.white,
            paddingRight: 10,
            paddingLeft: 10,
            height: 60,
        }
    });
    constructor(props){
        super(props);
        this.state={
            content:'',
            phone:''
        }
    }
    submit=()=> {
        const {content, phone} = this.state;

    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.imgContainer}>
                    <Image style={styles.writeImg} source={write}>

                    </Image>
                </Text>
                <TextInput style={styles.contentInput}
                           ref='textInput'
                           autoCorrect={false}
                           placeholder='请留下你的宝贵意见和建议，我们将努力改进（不少于5个字）'
                           placeholderTextColor='#d2d2d2'
                           underlineColorAndroid='transparent'
                           onChangeText={(content)=>{this.setState({content})}}
                           multiline={true} />
                <TextInput style={styles.contentInputTwo}
                           ref='textInput'
                           autoCorrect={false}
                           placeholder='请留下您的手机号码，以便我们回复您'
                           placeholderTextColor='#d2d2d2'
                           underlineColorAndroid='transparent'
                           onChangeText={(phone)=>{this.setState({phone})}}
                           multiline={true} />
                <View style={styles.btnContainer}>
                <TouchableHighlight style={styles.btn}  underlayColor='transparent'  onPress={()=>this.submit()}>
                    <Text style={{color:color.white}}>提交</Text>
                </TouchableHighlight>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
    },
    contentInput: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal:15,
        borderRadius:5,
        height:100,
        fontSize: 12,
        backgroundColor:"#fff",
        alignItems:'flex-start',
        textAlignVertical:'top'
    },
    contentInputTwo: {
        marginTop:15,
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal:15,
        borderRadius:5,
        height:50,
        fontSize: 12,
        backgroundColor:"#fff",
        textAlignVertical:'top'
    },
    btnContainer:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    btn: {
        borderColor:color.theme,
        borderWidth:1,
        height: 40,
        width:Dimensions.get('window').width*0.4,
        backgroundColor: color.theme,
        borderRadius:20,
        marginTop:20,
        justifyContent: 'center',
        alignItems:'center',
    },
    imgContainer:{
        textAlign:'center',
        paddingTop:100,
        paddingBottom:40
    },

});
export default Index
