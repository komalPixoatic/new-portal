import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
import Myprofile from './Myprofile';

const AccountScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>
<View >
        <Text style={styles.Text1}>
        Account Screen</Text>
      </View>
      {/* <View >
        <View style={{
          flexDirection: "row",
          marginLeft: 10,
          marginTop: 20,

        }}>
          <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')} >
            <Image source={Icons.iconsback}
              style={{ width: 30, height: 25 }} />
          </TouchableOpacity>
          <Text style={styles.Text1}>
            My Account</Text></View>
      </View>
      <View style={{ flexDirection: "row" }}>
        <View style={{
          width: 100,
          height: 100,
          borderColor: "#000000",
          borderWidth: 1,
          //backgroundColor:"red",
          borderRadius: 50,
          marginTop: 50,
          marginLeft: 3,
        }}><Image source={Icons.iconsuser96}
          style={{ width: 110, height: 110, marginLeft: -6, marginTop: -6 }} /></View>
        <View>
          <Text style={{ marginTop: 75, marginLeft: 10 }}>User name : jayant solanki </Text>
          <Text style={{ marginTop: 1, marginLeft: 10 }}>Email id : jayantsolanki2cool@gmail.com</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => navigation.navigate('Myprofile')}>
        <View style={{
          width: Dimensions.get("screen").width * 1,
          height: 70,
          borderWidth: 1,
          borderBottomColor: "#C0C0C0",
          borderColor: "#FFF",
          marginTop: 16
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.iconsuser2} style={{
              width: 45,
              height: 45,
              marginTop: 10,
              marginLeft: 10,
            }} />
            <Text style={{
              marginTop: 24,
              marginLeft: 10
            }}>My Profile</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{
          width: Dimensions.get("screen").width * 1,
          height: 70,
          borderWidth: 1,
          borderBottomColor: "#C0C0C0",
          borderColor: "#FFF"
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.iconswallet} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>Wallet</Text>
          </View></View></TouchableOpacity>
      <TouchableOpacity>
        <View style={{
          width: Dimensions.get("screen").width * 1,
          height: 70,
          borderWidth: 1,
          borderBottomColor: "#C0C0C0",
          borderColor: "#FFF"
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.iconspassword} style={{
              width: 45,
              height: 45,
              marginTop: 10,
              marginLeft: 10
            }} />
            <Text style={{
              marginTop: 24,
              marginLeft: 10
            }}>Reset password</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View style={{
          width: Dimensions.get("screen").width * 1,
          height: 70,
          borderWidth: 1,
          borderBottomColor: "#C0C0C0",
          borderColor: "#FFF"
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.iconslogout} style={{
              width: 45,
              height: 45,
              marginTop: 10,
              marginLeft: 10
            }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>Logout</Text>
          </View>
        </View>
      </TouchableOpacity> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    // width: Dimensions.get("screen").width * 1,
    // height: Dimensions.get("screen").width * 0.55,
    justifyContent: 'center',
    alignItems: 'center',
    flex:1
    //backgroundColor: '#FFD65B',
  },
  Text1: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 100
  },
});

export default AccountScreen;
