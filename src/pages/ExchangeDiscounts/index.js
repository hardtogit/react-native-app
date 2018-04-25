/**
 * author:XR
 * email:413401168@qq.com
 * Time: 2018/4/6 17:59
 */
import React,{Component} from 'react'
import  color from '../../utils/color';
import close from '../../assets/img/close.png';
import {View,Text,StyleSheet,TouchableHighlight,TouchableOpacity,Dimensions,TextInput,Image}from 'react-native'
import write from '../../assets/img/packet.png'
class Index extends Component{
    static navigationOptions = ({navigation}) => ({
        headerTitle:'兑换优惠',
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
            code:''
        }
    }
    clean=()=>{
        this.refs.input.clear()
        this.setState({
            code:''
        })
    };
    submit=()=> {
        const {code} = this.state;
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.imgContainer}>
                    <Image style={styles.writeImg} source={write}>

                    </Image>
                </Text>
                <View style={styles.inputContainer}>
                <TextInput
                    ref="input"
                    onChangeText={(code) => { this.setState({code:code})}}
                    underlineColorAndroid='transparent'
                    style={styles.input} placeholder='请输入兑换码...'/>
                    <TouchableOpacity style={styles.closeIcon} onPress={()=>{this.clean()}}>
                        {this.state.code?<Image style={styles.icon} source={close} ></Image>:<View/>}
                    </TouchableOpacity>
                </View>
                <Text style={styles.text}>点点：输入正确的兑换码可获得红包，在支付结算中使用红包获得优惠</Text>
                <View style={styles.btnContainer}>
                    <TouchableHighlight style={styles.btn}  underlayColor='transparent'  onPress={()=>this.submit()}>
                        <Text style={{color:color.white}}>确认兑换</Text>
                    </TouchableHighlight>
                </View>
                <View>
                    <Text style={styles.title}>兑换记录</Text>
                </View>
                <View style={styles.item}>
                    <View style={styles.infoText}>
                        <Text style={styles.timeTextLeft}>02-01-2018</Text>
                        <Text style={styles.timeTextRight}>12:23:20</Text>
                    </View>
                    <View style={styles.infoText}>
                            <Text style={styles.left}>12345678123</Text>
                            <Text style={styles.right}>成功兑换红包</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.infoText}>
                        <Text style={styles.timeTextLeft}>02-01-2018</Text>
                        <Text style={styles.timeTextRight}>12:23:20</Text>
                    </View>
                    <View style={styles.infoText}>
                        <Text style={styles.left}>12345678123</Text>
                        <Text style={styles.right}>成功兑换红包</Text>
                    </View>
                </View>
                <View style={styles.item}>
                    <View style={styles.infoText}>
                        <Text style={styles.timeTextLeft}>02-01-2018</Text>
                        <Text style={styles.timeTextRight}>12:23:20</Text>
                    </View>
                    <View style={styles.infoText}>
                        <Text style={styles.left}>12345678123</Text>
                        <Text style={styles.right}>成功兑换红包</Text>
                    </View>
                </View>
            </View>
        );
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff'
    },
    inputContainer:{
        width:Dimensions.get('window').width*0.8,
        height:35,
        paddingLeft:15,
        marginLeft:Dimensions.get('window').width*0.1,
        position:'relative'
    },
    input:{
        width:'100%',
        height:'100%',
        paddingLeft:15,
        backgroundColor:'#f2f2f2',
        fontSize:12,
        borderRadius:22
    },
    closeIcon:{
      position:'absolute',
      width:24,
      height:24,
      right:10,
      top:5,
      zIndex:100
    },
    icon:{
      width:'100%',
      height:'100%'
    },
    text:{
      fontSize:10,
      color:'#999',
      textAlign:'center',
      marginTop:20,

    },
    btnContainer:{
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
    title:{
      fontSize:14,
      fontWeight:'bold',
      textAlign:'center',
      marginTop:30
    },
    item:{
      textAlign:'center',
      marginTop:15
    },
    timeTextLeft:{
        fontSize:9,
        color:'#999',
        textAlign:'right',
        flex:1,
        paddingRight:5,
    },
    timeTextRight:{
        fontSize:9,
        color:'#999',
        flex:1,
        paddingLeft:5,
    },
    infoText:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    left:{
        textAlign:'right',
        flex:1,
        paddingRight:5,
        fontSize:12
    },
    right:{
        justifyContent:'flex-end',
        flex:1,
        fontSize:12,
        paddingLeft:5,
        color:'#F15B24'
    },
    imgContainer:{
        textAlign:'center',
        paddingVertical:50,
    },

});
export default Index