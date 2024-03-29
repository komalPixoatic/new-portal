import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Modal, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from '../constant/assets'

const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

import CountryPicker from 'react-native-country-picker-modal'
import { CountryCode, Country } from './utils/types'


const LoginWithNumber = ({ navigation }) => {

  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  const [loginwithOTP, setloginwithOTP] = useState(true)
  const [passSecure, setpassSecure] = useState(false)

  const [countryCode, setCountryCode] = useState('IN')
  const [country, setCountry] = useState(null)
  const [withCountryNameButton, setWithCountryNameButton] = useState(false)
  const [withFlag, setWithFlag] = useState(true)
  const [withEmoji, setWithEmoji] = useState(true)
  const [withFilter, setWithFilter] = useState(true)
  const [withAlphaFilter, setWithAlphaFilter] = useState(false)
  const [withCallingCode, setWithCallingCode] = useState(false)
  const [countrycodeN, setCountrycodeN] = useState("91")
  const onSelect = (country) => {
    setCountryCode(country.cca2)
    setCountry(country)
    console.log("Data :", country.callingCode[0])
    setCountrycodeN(country.callingCode[0])
  }

  const sendVarificationBTN = () => {
    console.log("Log -> ")
    if (number.length == 10) {
      navigation.navigate("Getotp")
    } else {
      alert("please Enter 10 digit mobile number.")
    }
  }

  const loginBTN = () => {
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    if (number == '') {
      alert('please Enter your number')
    } else if (number.length != 10) {
      alert("please Enter 10 digit mobile number.")
    } else if (password == '') {
      alert("please Enter password");
    } else if ((re.test(password) != true)) {
      alert("Password is not Correct");
      //setcheckpassword("false")
      //}
    } else if (true) {
      //alert("Success.!!")
      navigation.navigate("MainComponent")
    }
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text style={styles.Text}>Welcome</Text>
        <Text style={[styles.Text1, { marginTop: 12, }]}>Enter your phone number to login/</Text>
        <Text style={styles.Text1}>signup into your account</Text>
      </View>

      <View style={styles.container}>
        <View style={{
          height: 50,
          flexDirection: "row",
          alignItems: "center",
          borderRadius: 7,
          marginTop: 50,
          marginHorizontal: 19,
          justifyContent: "center",
          overflow: 'hidden',
        }}>
          <View>
            <CountryPicker
              containerButtonStyle={{ backgroundColor: "#F8F8F8", alignItems: 'center', justifyContent: 'center', paddingLeft: 23, paddingRight: 8, height: '100%' }}
              {...{
                countryCode,
                withFilter,
                withFlag,
                withCountryNameButton,
                withAlphaFilter,
                withCallingCode,
                withEmoji,
                onSelect,
              }}
              visible={false}
            />
          </View>
          <View style={{ backgroundColor: "#F8F8F8", justifyContent: 'center', height: '100%' }}>
            <Text style={{ fontSize: 14, color: '#000' }}>+{countrycodeN}</Text>
          </View>
          <TextInput
            style={{ flex: 1, color: '#000', backgroundColor: "#F8F8F8", height: '100%', }}
            maxLength={10}
            value={number}
            onChangeText={(e) => setNumber(e)}
            keyboardType='numeric'
          >
          </TextInput>
        </View>

        {loginwithOTP ?
          null : <View style={{
            height: 50,
            flexDirection: "row",
            alignItems: "center",
            borderRadius: 7,
            marginTop: 10,
            marginHorizontal: 19,
            justifyContent: "center",
            overflow: 'hidden',
            backgroundColor: "#F8F8F8",
          }}>
            <TextInput
              secureTextEntry={passSecure}
              style={{
                flex: 1,
                color: '#000',
                backgroundColor: "#F8F8F8",
                height: '100%',
                paddingLeft: 15
              }}
              maxLength={16}
              placeholder='Enter your Password'
              value={password}
              onChangeText={(e) => setPassword(e)}
            >
            </TextInput>
            <TouchableOpacity
              onPress={() => setpassSecure(!passSecure)}
              style={{ justifyContent: 'center', height: '100%', paddingHorizontal: 15 }}>
              <Image source={!passSecure ? Icon.eyeIcon : Icon.eyeIconInactive} />
            </TouchableOpacity>
          </View>}

        {loginwithOTP ? <TouchableOpacity
          onPress={() => setloginwithOTP(false)}
          style={{ marginTop: dh / 21, marginBottom: dh / 5 }}>
          <Text style={[styles.txBtn, { color: '#7B51F1' }]}>
            Login with password
          </Text>
        </TouchableOpacity>
          :
          <TouchableOpacity
            onPress={() => setloginwithOTP(true)}
            style={{ marginTop: dh / 21, marginBottom: dh / 5 }}>
            <Text style={[styles.txBtn, { color: '#7B51F1' }]}>
              Login with OTP
            </Text>
          </TouchableOpacity>}

        {loginwithOTP ?
          <TouchableOpacity
            onPress={sendVarificationBTN}
            style={styles.btnView}>
            <Text style={styles.txBtn}>
              Send verification code
            </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            onPress={loginBTN}
            style={styles.btnView}>
            <Text style={styles.txBtn}>
              Login
            </Text>
          </TouchableOpacity>
        }

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
    backgroundColor: "#FFF9FF",
    height: 600,
    width: dw / 1.05,
    paddingHorizontal: 15
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

export default LoginWithNumber;
