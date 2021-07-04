import React,{Component} from 'react';
import {View,Text,StyleSheet,Animated,Dimensions} from 'react-native';

const standarWidth = 360;
const {width} = Dimensions.get('window');
const titleFontSize = 20/standarWidth * width;
const titleColor = '#0adbc7';
const textColor = '#989898';
const textFontSize = 14/standarWidth * width;

export default class Splash extends Component {
    state = {
        animtedLogo : new Animated.Value(0)
    }

    componentDidMount(){
        Animated.timing(this.state.animtedLogo, {
            toValue :1,
            duration :3000,
            useNativeDriver : true
        }).start()
    }

    render() {
        console.log('render Splash');
        return  <Animated.View style={[styles.section1,{
                    opacity :this.state.animtedLogo
                }]}>
                    <View style={styles.displayContainer}>
                        <Text style={styles.logo}>Beer Bar</Text>
                        <Text style={styles.textBottomLogo}>Thử là mê, uống là phê!</Text>
                    </View>
                </Animated.View>
    }
}

const styles = StyleSheet.create({
    section1 :{
        flex: 1,
        alignItems: 'center'
    },
    displayContainer:{
        marginTop: 100
    },
    logo:{
        paddingVertical: 25,
        paddingHorizontal: 20,
        marginHorizontal: 100,
        flexDirection: 'column',
        backgroundColor:'#f5f6f78f',
        fontSize : titleFontSize,
        fontWeight : 'bold',
        color : titleColor,
        textAlign : 'center',
        borderRadius: 10
    },
    textBottomLogo:{
        marginTop: 5,
        textAlign : 'center',
        fontSize : textFontSize,
        color:textColor
    }
})