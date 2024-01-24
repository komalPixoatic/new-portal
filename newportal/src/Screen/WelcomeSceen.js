import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Platform, Dimensions,TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const WelcomeSceen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>
      <View >
        <Image source={Icons.car}
          style={styles.Icons} />
        <Text style={styles.Text1}>
          Welcome Back.!!</Text>
        <TouchableOpacity
        onPress={()=>{navigation.navigate("LoginScreen")}}
          style={styles.logInBtnStyl}>
          <Text style={styles.txBtn}>
            Login As a Partner
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.logInBtnStyl}>
          <Text style={styles.txBtn}>
            Login As a Captain
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
    //alignItems: 'center',
    //backgroundColor: '#FFD65B',
  },
  appLogo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
  Icons: {
    width: 195,
    height: 195,
    alignItems: "center",
    alignSelf: "center"
  },
  Text1: {
    fontSize: 25,
    fontWeight: "bold",
    textAlign:'center'
  },
  logInBtnStyl: {
    marginHorizontal: 20,
    backgroundColor: "#FFD65B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
    marginTop: 30
  },
  txBtn: {
    color: "#FFF",
    color: "#000",
    fontSize: 18,
    fontWeight: 'bold'
  },
});

export default WelcomeSceen;
