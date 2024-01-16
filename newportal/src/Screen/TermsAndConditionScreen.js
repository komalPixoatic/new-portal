import React, {useState, useEffect} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const TermsAndConditionScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text>Terms And Condition Screen</Text>
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

export default TermsAndConditionScreen;
