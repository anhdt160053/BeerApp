import React from 'react';
import {View,Text,Image,StyleSheet,Dimensions} from 'react-native';

const _IMAGE = '../images/logo-google.png';
const {width,height} = Dimensions.get('window');
const standarWidth = 360;
const textFontSize = 14/standarWidth * width;
const titleColor = '#0adbc7';
const textColor = '#989898';
const heightTitle = 50;

export default function Header(props) {
    console.log('Header');
    return  <View style={styles.wrappedHeader}>
                <View style={styles.container}>
                    <View style={{flex:3,flexDirection:'row'}}><Text style={styles.title}>{props.title}</Text></View>
                    <View style={styles.wrappedBottomtitle}>
                        <View style={styles.wrapperImg}><Image source={require(_IMAGE)} style={styles.imgHeader}/></View>
                        <Text style={styles.textFontSize}>{props.textLoginWithG}</Text>
                    </View>
                    <View style={styles.wrappedTextOr}>
                        <View style={styles.dash}></View>
                        <Text style={styles.textOr}>{props.textOr}</Text>
                        <View style={styles.dash}></View>
                    </View>
                </View>
            </View>
}

const styles = StyleSheet.create({
    wrappedHeader : {
        justifyContent:'center',
        marginHorizontal:20,
        height : height*3/8,
    },
    container:{
        flex :6
    },
    title:{
        flex:1,
        fontSize:30,
        height :heightTitle,
        width:150,
        color : titleColor,
        fontWeight:'bold',
        textAlign:'center',
        alignSelf: 'center',
    },
    wrappedBottomtitle:{
        flex :1,
        backgroundColor: 'red',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:5,
        elevation:5,
        backgroundColor:'#fff',
        borderRadius : 5
    },
    wrapperImg:{
        flex :2,
    },
    textFontSize:{
        flex:8,
        fontSize : 20,
        color : textColor,
        textAlign:'center',
        alignSelf:'center',
        marginRight:30
    },
    wrappedTextOr:{
        flex :2,
        flexDirection:'row',
        justifyContent:'center',
        alignItems: 'center',
    },
    dash:{
        flex : 2,
        height:2,
        width:'100%',
        backgroundColor:'#000'
    },
    textOr:{
        flex : 1,
        fontSize:textFontSize,
        color:'#000',
        textAlign:'center'
    },
    imgHeader:{
        width:30,
        height:30
    }
})
