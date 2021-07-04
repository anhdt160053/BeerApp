import React from 'react';
import {View,Text,StyleSheet,Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const standarWidth = 360;
const textFontSize = 14/standarWidth * width;

export default function TextBottomInput(props) {
    console.log('TextBottomInput')
    const {...rest} = props;
    return  <View style={styles.wrappedTextRight}>
                <Text 
                    {...rest}
                    style={styles.textRight}
                >{props.textRight}</Text>
            </View>
}

const styles = StyleSheet.create({
    wrappedTextRight:{
        marginHorizontal : 20,
    },
    textRight:{
        fontSize : textFontSize,
        alignSelf:'flex-end',
        color : '#3c5b85',
        paddingRight:10
    },
})