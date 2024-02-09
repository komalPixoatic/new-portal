import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Modal, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;
import OtpInputs from 'react-native-otp-inputs';

const Getotp = ({ navigation }) => {

  useEffect(() => {

  }, [])

  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text style={styles.Text}>What's the code?</Text>
        <Text style={[styles.Text1, { marginTop: 12, }]}>Type the 4-digit code we just sent to</Text>
        <Text style={styles.Text1}>+91********3672</Text>
      </View>

      <View style={styles.container}>
        <View style={{
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 7,
          marginTop: 50,
          width: dw / 1.5,
          justifyContent: "center",
          overflow: 'hidden',
          alignSelf: 'center'
        }}>
          <OtpInputs
            handleChange={(code) => console.log(code)}
            numberOfInputs={4}
            inputContainerStyles={{
              borderWidth: 2,
              borderColor: "#F8F8F8",
              backgroundColor: "#F8F8F8",
              width: dw / 8.5,
              height: dh / 15,
              borderRadius: 8,
              alignItems: 'center'
            }}
          />
        </View>

        <View
          style={{ marginTop: dh / 21, marginBottom: dh / 5 }}>
          <Text style={styles.txBtn}>
            Didn't recieve it?
            <Text style={[styles.txBtn, { color: '#7B51F1' }]}>
              {" "}Resend in 00:59
            </Text>
          </Text>
        </View>

        <TouchableOpacity onPress={() => navigation.navigate("MainComponent")}
          style={styles.btnView}>
          <Text style={styles.txBtn}>
            Verify it now
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Text: {
    fontWeight: "bold",
    marginTop: 55,
    fontSize: 20,
    marginLeft: 15,
    color: "#000"
  },
  Text1: {
    marginTop: 1,
    fontSize: 14,
    color: "#6D6E70",
    marginLeft: 15,

  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignSelf: "center"
  },

  modalView: {
    backgroundColor: "#FFFFFF",
    height: 600,
    width: 300,
  },
  btnView: {
    marginHorizontal: 20,
    backgroundColor: "#FFD65B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 18,
    height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
    width: dw / 1.12,
  },
  txBtn: {
    color: "#000",
    fontSize: 14,
    alignSelf: 'center'
  },
});

export default Getotp;
