import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Modal, FlatList, TouchableOpacity, TextInput, Dimensions, Platform, BackHandler, Alert  } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;
import OtpInputs from 'react-native-otp-inputs';

const Getotp = ({ navigation }) => {

  const [duration, setDuration] = useState(2 * 60);
  const [otpInput, setotpInput] = useState('');

  useEffect(() => {
    const timer = setInterval(() => {
        setDuration(prevDuration => {
            if (prevDuration <= 0) {
                clearInterval(timer);
                return 0;
            }
            return prevDuration - 1;
        });
    }, 1000);

    //useEffect(() => {
      const backAction = () => {
        if (!navigation.isFocused()) {
          return false;
        }
  
        Alert.alert("Hold on!", "Are you sure you want to exit?", [
          { text: "Cancel" },
          { text: "Yes", onPress: () => BackHandler.exitApp() }
        ]);
        return true;
      };
  
      const backHandler = BackHandler.addEventListener(
        "hardwareBackPress",
        backAction
      );
  
      // Cleanup function to clear the interval when the component unmounts
      return () => {
        backHandler.remove()
        clearInterval(timer);
      }
    //}, [navigation]);

    //return () => clearInterval(timer);
    
}, [navigation]);

function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
}
  const PlatformStyl = Platform.OS=='android'?{  width: dw / 8.5,
      height: dh / 15}:{ padding:17}

      const otpBtnHandle = (code)=>{
        console.log(code.length)
        console.log(code)
        setotpInput(code)
      }

      const verifyOtpButton = ()=>{
        if(otpInput.length!=4){
          alert('please Enter 4 digit OTP')
        }else{
        navigation.navigate("MainComponent") 
        }
      }
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
            handleChange={(code) =>otpBtnHandle(code)}
            numberOfInputs={4}
            inputContainerStyles={[{
               borderWidth: 2,
               borderColor: "#F8F8F8",
               backgroundColor: "#F8F8F8",
              //  width: dw / 8.5,
              //  height: dh / 15,
              // padding:20,
              borderRadius: 8,
              alignItems: 'center'
            },PlatformStyl]}
          />
        </View>

        <View
          style={{ marginTop: dh / 21, marginBottom: dh / 5 }}>
          <Text style={styles.txBtn}>
            Didn't recieve it?
            {duration==0?
            <Text style={[styles.txBtn, { color: '#7B51F1' }]}>
              {" "}Resend
            </Text>
            :
            <Text style={[styles.txBtn, { color: '#7B51F1' }]}>
              {" "}Resend in {formatTime(duration)}
            </Text>
            }
          </Text>
        </View>

        <TouchableOpacity 
        onPress={() => verifyOtpButton()}
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
