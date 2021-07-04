import React,{Component} from 'react';
import {View,TextInput,StyleSheet,Dimensions} from 'react-native';

const {width,height} = Dimensions.get('window');
const standarWidth = 360;
const textFontSize = 14/standarWidth * width;


export default class Input extends Component {

    constructor(props) {
        super(props);
        this.state={
          username : '',
          password : '',
          email :'',
          phone:''
        };
    }
    
    handleEnter = value => {
        if(this.props.isUserName){
            this.setState({
                username : value
            })
        }
        else if(this.props.isPWord){
            this.setState({
                password : value
            })
        }else if(this.props.isEmail){
            this.setState({
                email : value
            })
        }else{
            this.setState({
                phone : value
            })
        }
    }
      
    render() {
        const {isPWord,isEmail,isPhone,...rest} = this.props;
        console.log('component input')
        return  <View style={styles.wrappedInput}>
                    <TextInput 
                        {...rest}
                        autoFocus={false}
                        style={styles.textInput}
                        onChangeText={this.handleEnter}
                    />
                </View>
    }
}

const styles=StyleSheet.create({
    wrappedInput : {
        justifyContent:'center',
        marginHorizontal:20,
        height : height/10,
    },
    textInput : {
        borderWidth: 1,
        borderColor: '#ccc',
        fontSize :textFontSize,
        borderRadius :5,
    },
})