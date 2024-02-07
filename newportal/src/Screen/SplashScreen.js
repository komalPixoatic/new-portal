import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'

const SplashScreen = ({ navigation }) => {
  const temp = ()=>{
    navigation.navigate("slider")
  }
  useEffect(() => {
    setTimeout(() => {
      temp();
    }, 3000);
  }, []);


  return (
    <SafeAreaView style={styles.safearea}>
      <View >
        <Image source={Icons.taxi}
          style={styles.Icons} />
        <Text style={styles.Text1}>
          New Portal</Text>
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
  appLogo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
  Icons: {
    width: 75,
    height: 75,
    alignItems: "center",
    alignSelf: "center"
  },
  Text1: {
    fontSize: 30,
    fontWeight: "500",
    color:"#000000",
    marginTop:15
  },
});

export default SplashScreen;
