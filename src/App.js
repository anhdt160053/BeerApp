import React, { Component } from 'react';
import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import Auth from './screens/auth/index';
import Splash from './screens/Splash/Splash';
// import {onPressRegisterContext} from './context/handleOnPress'

export default class App extends Component {
    constructor(props){
        console.log('====================================');
        console.log('run constructor');
        console.log('====================================');
        super(props);
        this.state = {
            isLoading: true,
            isSigned: false,
            isUser : false,
            timeOut : 2000
        }
        setTimeout(() => {
            console.log('run Setimeout');
            this.setState({
                isLoading : false
            })
        }, this.state.timeOut);
    }
    render() {
        const {isLoading,isSigned} = this.state;
        console.log('====================================');
        console.log('App--------',this.props.navigation);
        console.log('====================================');
        console.log('run render App');
        return  <NavigationContainer>
                    {isLoading && <Splash />}
                    {!isLoading && !isSigned && <Auth/>}
                </NavigationContainer>
    }
}

