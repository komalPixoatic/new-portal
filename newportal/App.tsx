import React, { Component,useEffect } from 'react';
import { View, Image, Dimensions, Text, Platform } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icons from './src/constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;
import WelcomeSceen from './src/Screen/WelcomeSceen';
import SplashScreen from './src/Screen/SplashScreen';
import slider from './src/Screen/slider';
import LoginScreen from './src/Screen/LoginScreen';
import SignUpScreen from './src/Screen/SignUpScreen';
import ForgotPasswordScreen from './src/Screen/ForgotPasswordScreen';
import TermsAndConditionScreen from './src/Screen/TermsAndConditionScreen';
import HomeScreen from './src/Screen/HomeScreen';
import AccountScreen from './src/Screen/AccountScreen';
import NotificationScreen from './src/Screen/NotificationScreen';
import SearchScreen from './src/Screen/SearchScreen';
import Getotp from './src/Screen/Getotp';
import Myprofile from './src/Screen/Myprofile';
import LoginOptionScreen from './src/Screen/LoginOptionScreen';
import LoginWithEmail from './src/Screen/LoginWithEmail';
import TripScreen from './src/Screen/TripScreen';
import RentalScreen from './src/Screen/RentalScreen';
import IntercityScreen from './src/Screen/IntercityScreen';

import messaging from '@react-native-firebase/messaging';
//import PushNotification from 'react-native-push-notification';

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
            height: dh / 10.8,
            paddingTop:Platform.OS=='android'?1:15,
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
                source={focused ? Icons.HomeA : Icons.HomeIN}
                style={{
                  width:focused ?  45:45,
                  height:focused ?  45:45,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                {/* <Text>Home</Text> */}
              </>
            }
          }}
        />
        <Tab.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <><Image
                source={focused ? Icons.SearchA:Icons.SearchIN}
                // source={Icons.service1:Icons.service1Inactive}
                style={{
                  width:focused ?  45:22,
                  height:focused ?  45:22,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                {/* <Text>Services</Text> */}
              </>
            }
          }}
        />
        <Tab.Screen
          name="NotificationScreen"
          component={NotificationScreen}
          options={{
            tabBarIcon: ({ focused }) => {
              return <><Image
                source={focused ? Icons.NotificationA:Icons.NotificationIN}
                // source={Icons.activity2:Icons.activity2Inactive}
                style={{
                  width:focused ?  42:19,
                  height:focused ?  42:19,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                {/* <Text>Activity</Text> */}
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
                source={focused ? Icons.UserA:Icons.UserIN}
                // source={Icons.user1:Icons.user1Inactive}
                style={{
                  width:focused ?  42:21,
                  height:focused ?  42:21,
                }} />
                {/* {focused ?<><View style={{paddingVertical:3}}></View>
                <Image source={icons.test}/></>:null} */}
                {/* <Text>Account</Text> */}
              </>
            }
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const App = () => {
  useEffect(() => {
    getDeviceToken()
    foregroundhandlerFuntion();
  }, [])
  const foregroundhandlerFuntion = ()=>{
    if(Platform.OS=='android'){
      messaging().onMessage(async remoteMessage => {
        console.log('notification on froground state......', remoteMessage);
      //   if(remoteMessage){
      //   PushNotification.createChannel(
      //     {
      //       channelId: 'mychannel', // (required)
      //       channelName: 'My channel', // (required)
      //       vibrate: true,
      //     },
      //     created => {
      //       PushNotification.localNotification({
      //         channelId: 'mychannel',
      //         autoCancel: true,
      //         bigText: remoteMessage.notification.body,
      //         subText: 'Notification',
      //         title: remoteMessage.notification.title,
      //         message: `Notif ID:`,
      //         vibrate: true,
      //         vibration: 300,
      //         playSound: true,
      //         soundName: 'default',
      //         ignoreInForeground: false,
      //         importance: 'high',
      //         invokeApp: true,
      //         allowWhileIdle: true,
      //         priority: 'high',
      //         visibility: 'public',
      //       });
      //     },
      // )
      //   }
    })
  }}
  
  const getDeviceToken = async () => {
    if(Platform.OS=='android'){
    //   await messaging().registerDeviceForRemoteMessages()
    let token = await messaging().getToken();
    console.log("fcm token =>",token);
    
    // try {
    //   await messaging().registerDeviceForRemoteMessages();
    //   const fcmToken_N = await messaging().getToken();
    //   if (fcmToken_N) {
    //     console.log(JSON.stringify(fcmToken_N), '<- new Token');
    //   }
    // } catch (error) {
    //   console.log(error, 'Error in fcmtoken ');
    // }
 

  }
    else{
      console.log("fcm token : IOS side comming soon..");
    }
  };
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
        <Stack.Screen
          name="WelcomeSceen"
          component={WelcomeSceen}
        />
        <Stack.Screen
          name="Myprofile"
          component={Myprofile}
        />
        <Stack.Screen
          name="LoginOptionScreen"
          component={LoginOptionScreen}
        />
        <Stack.Screen
          name="LoginWithEmail"
          component={LoginWithEmail}
        />
        <Stack.Screen
          name="TripScreen"
          component={TripScreen}
        />
        <Stack.Screen
          name="RentalScreen"
          component={RentalScreen}
        />
        <Stack.Screen
          name="IntercityScreen"
          component={IntercityScreen}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default App;
