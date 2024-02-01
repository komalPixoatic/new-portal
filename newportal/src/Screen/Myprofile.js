import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
const Myprofile = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>

      <View >
        <View style={{
          flexDirection: "row",
          marginLeft: 10,
          marginTop: 20,

        }}>
          <TouchableOpacity>
            <Image source={Icons.iconsback}
              style={{ width: 30, height: 25 }} />
          </TouchableOpacity>
          <Text style={styles.Text1}>
            My Profile</Text></View>
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

          style={{ width: 110, height: 110, marginLeft: -6, marginTop: -6 }} />
          <TouchableOpacity>
          <Image source={Icons.galleryicon}
            style={{ width: 30, height:30, position:"absolute",left:77, bottom:1 }} /></TouchableOpacity></View>
        <View><Text style={{ marginTop: 75, marginLeft: 10 }}>User name : jayant solanki </Text>
          <Text style={{ marginTop: 1, marginLeft: 10 }}>Email id : jayantsolanki2cool@gmail.com</Text></View></View>
      {/* <View style={{flexDirection:"row"}}> */}
      <TouchableOpacity>
        <View style={{
          width: Dimensions.get("screen").width * 1,
          height: 70,
          borderWidth: 1,
          borderBottomColor: "#C0C0C0",
          borderColor: "#FFF",
          marginTop: 16
        }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.idcard} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>jayant solanki</Text>
          </View>
        </View></TouchableOpacity>
      {/* </View> */}
      <TouchableOpacity>
        <View style={{ width: 375, height: 70, borderWidth: 1, borderBottomColor: "#C0C0C0", borderColor: "#FFF" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.email} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>jayant_s@pixoatic.com</Text>
          </View></View></TouchableOpacity>
      <TouchableOpacity>
        <View style={{ width: 375, height: 70, borderWidth: 1, borderBottomColor: "#C0C0C0", borderColor: "#FFF" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.phonecall} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>+91 7987473653</Text>
          </View></View></TouchableOpacity>
      <TouchableOpacity>
        <View style={{ width: 375, height: 70, borderWidth: 1, borderBottomColor: "#C0C0C0", borderColor: "#FFF" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.notification} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>Notification</Text>
          </View></View></TouchableOpacity>


    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    width: Dimensions.get("screen").width * 1,
    height: Dimensions.get("screen").width * 0.55,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFD65B',
  },
  Text1: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100
  },
});

export default Myprofile;
