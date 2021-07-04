import React from 'react';
import Login from './Login/Login';
import Register from './Register/Register';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();
const screenOptions ={
    headerStyle:{
        backgroundColor: '#fff',
        opacity: 0,
    }
}
const styleHederRegister = {
    title:'Quay lại',
    headerStyle :{
        backgroundColor:'#0adbc7'
    },
    headerTitleStyle :{
        marginLeft:-25,
        fontSize :20,
        color :'#fff'
    },
    headerTintColor :'#fff'
}
export default function Index() {
    console.log('====================================');
    console.log('run index Auth');
    console.log('====================================');
    return  <Stack.Navigator initialRouteName='Login' screenOptions={screenOptions}>    
                <Stack.Screen 
                    name='Login' component={Login}
                ></Stack.Screen> 
                <Stack.Screen name='Register' component={Register} 
                    options={styleHederRegister}    
                ></Stack.Screen>
            </Stack.Navigator>
                            
}
