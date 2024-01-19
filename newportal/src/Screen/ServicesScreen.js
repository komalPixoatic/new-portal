import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'

const ServicesScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>
      <View >
        <Text style={styles.Text1}>
        Services Screen</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFD65B',
  },
  Text1: {
    fontSize: 35,
    fontWeight: "bold"
  },
});

export default ServicesScreen;
