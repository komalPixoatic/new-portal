import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'

const ServicesScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flexDirection: "row" }}>
        <Image source={Icons.iconsbackbutton}
          style={{ width: 30, height: 30, marginLeft: 10, }} />
        <Text style={styles.Text1}>
          Book</Text>
      </View>
      <Image source={Icons.googlemapstips}
        style={{ height: 400 }} />
      <View style={{
        width: 350,
        height: 50,
        borderBottomWidth: 1,
        marginLeft: 12,
        borderColor: "#C0C0C0"
      }}><Text style={{ marginTop: 18, fontWeight: "bold" }}>On Trip</Text></View>
      <Text style={{ marginLeft: 15, marginTop: 15, fontSize: 12, fontWeight: "bold" }}>These are the contact you have saved.
        {'\n'}Do you want send your travel details.
      </Text>
      <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 10 }}><Text style={{ marginLeft: 15 }}>Your contact (3)</Text>
        <Text style={{ color: "blue", marginRight: 10 }}>+ Add New Contact</Text></View>
      <View style={{
        marginLeft: 16,
        marginTop: 10
      }}>
        <View style={{ flexDirection: "row" }}><Image source={Icons.unchecked}
          style={{ width: 25, height: 25 }} /><Text style={{ marginTop: 3, marginLeft: 5 }}>jayant solanki</Text></View>
        <View style={{ flexDirection: "row" }}><Image source={Icons.unchecked}
          style={{ width: 25, height: 25 }} /><Text style={{ marginTop: 3, marginLeft: 5 }}>Rahul dravid</Text></View>
        <View style={{ flexDirection: "row" }}><Image source={Icons.checkbox}
          style={{ width: 25, height: 25 }} />
          <Text Text style={{ marginTop: 3, marginLeft: 5 }}>komal chouhan</Text></View></View>
      <View style={{
        flexDirection: "row",
        width: 100,
        height: 40,
        borderRadius: 5,
        backgroundColor: "#FED565",
        marginLeft: 15,
        marginTop: 10
      }}><Image source={Icons.send}
        style={{
          width: 20,
          height: 20,
          marginTop: 9,
          marginLeft: 18
        }} />
        <Text style={{
          marginTop: 10,
          marginLeft: 5
        }}>Send</Text></View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#fff',
  },
  Text1: {
    fontSize: 25,
    fontWeight: "bold",
    marginLeft: 120
  },
});

export default ServicesScreen;
