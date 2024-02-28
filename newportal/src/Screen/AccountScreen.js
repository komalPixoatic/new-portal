import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
import Myprofile from './Myprofile';

const dw = Dimensions.get("screen").width
const dh = Dimensions.get("screen").height

const AccountScreen = ({ navigation }) => {

  return (
    <SafeAreaView style={styles.safearea}>
      <ScrollView>
        <View >
          <TouchableOpacity style={styles.userPickerStyl}>
            <Image source={Icons.iconsuser96} style={styles.pickerImg}/>
          </TouchableOpacity>
          <Text style={styles.userNameTx}>User name</Text>
          <Text style={styles.userNameTx1}>user@gmail.com</Text>
        </View>
        <View style={styles.rowSmallcardCnt}>
          <TouchableOpacity style={styles.rowCardsmall}>
            <Image source={Icons.iconswallet} style={styles.cardIconIMGStyle} />
            <Text style={styles.TxBold}>Help</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rowCardsmall}>
            <Image source={Icons.iconswallet} style={styles.cardIconIMGStyle} />
            <Text style={styles.TxBold}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.rowCardsmall}>
            <Image source={Icons.iconswallet} style={styles.cardIconIMGStyle} />
            <Text style={styles.TxBold}>Activity</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.safatychecupView}>
        <Text style={styles.TxBold}>Safety check-up</Text>
        <Text style={[styles.TxBold,{fontWeight:'400',fontSize:12}]}>Boost your safety profile by turing on</Text>
        <Text style={[styles.TxBold,{fontWeight:'400',fontSize:12}]}>additional features</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.activity2Inactive} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Send a gift</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.iconswallet} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Settings</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.send} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Messages</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.iconswallet} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Earn by driving or delivering</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.galleryicon} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Business hub</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.iconswallet} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Manage account</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.iconspassword} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Reset password</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.rowView1}>
            <View style={styles.viewnest1}>
              <Image source={Icons.iconslogout} style={styles.rowImgStl} />
              <Text style={styles.txStyleLbale}>Logout</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  Text1: {
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: 'center',
    alignItems: 'center',
    //marginLeft: 100
  },
  userPickerStyl: {
    //backgroundColor: 'red',
    alignSelf: 'center',
    marginBottom: 5,
    marginTop: 25,
    borderRadius: 285
  },
  userNameTx: {
    fontSize: 15,
    //fontWeight: 'bold',
    textAlign: 'center'
  },
  userNameTx1: {
    fontSize: 15,
    //fontWeight: 'bold',
    textAlign: 'center'
  },
  rowView: {
    width: Dimensions.get("screen").width * 1,
    height: 70,
    borderWidth: 1,
    borderBottomColor: "#C0C0C0",
    borderColor: "#FFF",
    marginTop: 16,
    justifyContent: 'center'
  },
  rowView1: {
    width: Dimensions.get("screen").width * 1,
    height: 70,
    // borderWidth: 1,
    borderBottomWidth:1,
    borderBottomColor: "#C0C0C0",
    borderColor: "#F3F3F3",
    justifyContent: 'center'
  },
  rowImgStl: {
    width: 28,
    height: 28,
    //marginTop: 19,
    marginLeft: 10
  },
  viewnest1: {
    flexDirection: "row",
    //alignItems:'center'
  },
  txStyleLbale: {
    marginLeft: 10,
    marginTop: 6.5,
    fontWeight:'bold',
    color:'#000'
  },
  rowSmallcardCnt: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  rowCardsmall: {
    height: dh / 9,
    width: dw / 3.7,
    backgroundColor: '#F3F3F3',
    marginVertical: 15,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardIconIMGStyle: {
    marginLeft: 0, width: 23, height: 23, marginVertical: 5
  },
  pickerImg:{
   height:dh/6.2,
   width:dw/3
  },
  safatychecupView:{
    // height:dh/11,
    padding:15,
    width:dw/1.07,
    backgroundColor: '#F3F3F3',
    alignSelf:'center',
    marginTop:5,
    marginBottom:15,
    borderRadius: 10,
  },
  TxBold:{
    fontWeight:'bold',
    color:'#000'
  }

});

export default AccountScreen;
