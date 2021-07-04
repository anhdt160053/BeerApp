import React from 'react';
import {View,TouchableOpacity,Text,StyleSheet,Dimensions} from 'react-native';

const {height} = Dimensions.get('window');

export default function Button(props) {
    console.log('Button');
    const {...rest} = props;
    return  <View>
                <TouchableOpacity style={styles.wrappedButton} {...rest}>
                    <Text style={styles.button}>{props.titleButton}</Text>
                </TouchableOpacity>
            </View>
}

const styles = StyleSheet.create({
    button:{
        marginHorizontal:20,
        paddingVertical:10,
        fontSize : 25,
        fontWeight:'bold',
        backgroundColor : '#00dac5',
        color : '#fff',
        borderRadius :5,
        textAlign :'center'
    },
    wrappedButton:{
        height : height/8,
        justifyContent:'center'
    }
})