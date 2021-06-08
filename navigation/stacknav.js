import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from '../auth/login';
import Signup from '../auth/signup';
import Chatscreen from '../screens/chatscreen';

const Stack = createStackNavigator();

function Stack()
{
    return(
        <NavigationContainer>
          <Stack.Screen name="login" component={Login} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name="Chatscreen" component={Chatscreen} />


        </NavigationContainer>
        // <Text>dgfhd</Text>

    );
}
export default Stacknav;
