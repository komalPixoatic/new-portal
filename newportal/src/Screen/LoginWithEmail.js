import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Modal, FlatList, TouchableOpacity, TextInput, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;
import Icon from '../constant/assets'

const LoginWithEmail = ({ navigation }) => {

  const [loginwithOTP, setloginwithOTP] = useState(true)
  const [passSecure, setpassSecure] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  // useEffect(() => {
  // }, [])

  const sendVarificationButton = () => {
    console.log("-log->", email, " - ")

    var emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email === '') {
      alert('please Enter email')
    } else if (!emailRegex.test(email)) {
      alert('please Enter valid email')
    } else {
      //alert('Success.!!')
      navigation.navigate("Getotp")
    }

  }

  const LoginButton = () => {
    console.log('login btn-->')
    var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    var emailRegex1 = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (email === '') {
      alert('please Enter email')
    } else if (!emailRegex1.test(email)) {
      alert('please Enter valid email')
    } else if (password == '') {
      alert("please Enter password");
    } else if ((re.test(password) != true)) {
      alert("Password is not Correct");
    } else {
      navigation.navigate("MainComponent")
    }
  }

  return (
    <SafeAreaView style={styles.safearea}>
      <View>
        <Text style={styles.Text}>Welcome</Text>
        <Text style={[styles.Text1, { marginTop: 12, }]}>Enter your email to login/signup into</Text>
        <Text style={styles.Text1}>your account</Text>
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
          overflow: 'hidden'
        }}>
          <TextInput
            style={{
              flex: 1,
              color: '#000',
              backgroundColor: "#F8F8F8",
              height: '100%',
              paddingLeft: 15
            }}
            placeholder='Enter your email'
            value={email}
            onChangeText={(e) => setEmail(e)}
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
            onPress={sendVarificationButton}
            style={styles.btnView}>
            <Text style={styles.txBtn}>
              Send verification code
            </Text>
          </TouchableOpacity>
          :
          <TouchableOpacity
            onPress={LoginButton}
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

export default LoginWithEmail;
