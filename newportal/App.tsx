import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/Screen/SplashScreen';
import slider from './src/Screen/slider';
import LoginScreen from './src/Screen/LoginScreen';
import SignUpScreen from './src/Screen/SignUpScreen';
import ForgotPasswordScreen from './src/Screen/ForgotPasswordScreen';
import TermsAndConditionScreen from './src/Screen/TermsAndConditionScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false, animation: 'none', animationDuration: 0, }}>
      <Stack.Screen 
        name="SplashScreen" 
        component={SplashScreen} 
        options={{ headerShown: false }}/>
        <Stack.Screen 
        name="slider" 
        component={slider} 
        options={{ headerShown: false }}/>
        <Stack.Screen 
        name="LoginScreen" 
        component={LoginScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="SignUpScreen" 
        component={SignUpScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="ForgotPasswordScreen" 
        component={ForgotPasswordScreen} 
        options={{ headerShown: false }}
        />
        <Stack.Screen 
        name="TermsAndConditionScreen" 
        component={TermsAndConditionScreen} 
        options={{ headerShown: true }}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;