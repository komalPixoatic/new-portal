import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      //temp();
    }, 3000);
  }, []);


  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text>newPortal</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F8FCFE',
  },
  appLogo: {
    width: 300,
    height: 250,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
