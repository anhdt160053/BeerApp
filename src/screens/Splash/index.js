import React from 'react';
import Splash from './Splash';
import {createStackNavigator} from '@react-navigation/native';

const Stack = createStackNavigator();

export default function index() {
    return  <Stack.Navigator initialRouteName='Splash'>
                <Stack.Screen name='Splash' component={Splash} />
            </Stack.Navigator>
    } 
