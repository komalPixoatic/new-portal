import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const ForgotPasswordScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text>Forgot Password</Text>
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
});

export default ForgotPasswordScreen;
