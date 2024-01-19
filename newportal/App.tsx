import React, { Component } from 'react';
import { View, Image, Dimensions, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icons from './src/constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

import SplashScreen from './src/Screen/SplashScreen';
import slider from './src/Screen/slider';
import LoginScreen from './src/Screen/LoginScreen';
import SignUpScreen from './src/Screen/SignUpScreen';
import ForgotPasswordScreen from './src/Screen/ForgotPasswordScreen';
import TermsAndConditionScreen from './src/Screen/TermsAndConditionScreen';
import HomeScreen from './src/Screen/HomeScreen';
import AccountScreen from './src/Screen/AccountScreen';
import ActivityScreen from './src/Screen/ActivityScreen';
import ServicesScreen from './src/Screen/ServicesScreen';
import Getotp from './src/Screen/Getotp';

const Stack = createNativeStackNavigator();

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <View style={{ flex: 1, backgroundColor: '#F8FCFE' }}>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarShowLabel: false,
          tabBarStyle: {
            width: dw / 1,
            alignSelf: 'center',
            //bottom: 20,
            height: dh / 12,
            //borderRadius: dh / 50,
            shadowColor: '#000000',
            //elevation:Scale(4),
            shadowOffset: {
              width: 0.5,
              height: 0.5,
            },
            shadowOpacity: 0.6,
            shadowRadius: 2.5,
          }
        })}
      >
        <Tab.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <><Image
                source={focused ? Icons.home2 : Icons.home2Inactive}
                style={{
                  width: 25,
                  height: 25,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                <Text>Home</Text>
              </>
            }
          }}
        />
        <Tab.Screen
          name="ServicesScreen"
          component={ServicesScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <><Image
                source={focused ? Icons.service1:Icons.service1Inactive}
                // source={Icons.service1:Icons.service1Inactive}
                style={{
                  width: 25,
                  height: 25,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                <Text>Services</Text>
              </>
            }
          }}
        />
        <Tab.Screen
          name="ActivityScreen"
          component={ActivityScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <><Image
                source={focused ? Icons.activity2:Icons.activity2Inactive}
                // source={Icons.activity2:Icons.activity2Inactive}
                style={{
                  width: 25,
                  height: 25,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                <Text>Activity</Text>
              </>
            }
          }}
        />
        <Tab.Screen
          name="AccountScreen1"
          component={AccountScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <><Image
                source={focused ? Icons.user1:Icons.user1Inactive}
                // source={Icons.user1:Icons.user1Inactive}
                style={{
                  width: 25,
                  height: 25,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                <Text>Account</Text>
              </>
            }
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="SplashScreen" screenOptions={{ headerShown: false, animation: 'none', animationDuration: 0, }}>
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
          options={{ headerShown: false }} />
        <Stack.Screen
          name="slider"
          component={slider}
          options={{ headerShown: false }} />
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
        <Stack.Screen
          name="MainComponent"
          component={MyTabs}
        />
        <Stack.Screen
          name="Getotp"
          component={Getotp}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
