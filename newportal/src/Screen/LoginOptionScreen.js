import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Dimensions,TouchableOpacity, } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const LoginOptionScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View>
      <TouchableOpacity
      onPress={()=>navigation.navigate("ForgotPasswordScreen")}
          style={styles.logInBtnStyl}>
          <Text style={styles.txBtn}>
            Login with Phone
          </Text>
        </TouchableOpacity>
      <TouchableOpacity
      onPress={()=>{
        navigation.navigate("LoginWithEmail")
        //navigation.navigate("slider")
    }}
          style={[styles.logInBtnStyl,{backgroundColor: "#000000"}]}>
          <Text style={[styles.txBtn,{color: "#fff"}]}>
            Login with email
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  logInBtnStyl: {
    marginHorizontal: 20,
    backgroundColor: "#FFD65B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
    width:dw/1.12,
    marginTop: 30
  },
  txBtn: {
    color: "#000",
    fontSize: 14,
    
  },
});

export default LoginOptionScreen;
