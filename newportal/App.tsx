import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from './src/Screen/SplashScreen';
import slider from './src/Screen/slider';



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

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;