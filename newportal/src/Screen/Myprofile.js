import React, { useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Dimensions, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
import ImagePicker from 'react-native-image-crop-picker';
//import AccountScreen from './AccountScreen';




const Myprofile = ({ navigation }) => {
  const [image, setImage] = useState("");
  const [checkname, setcheckname] = useState(false);
  const [checkemail, setcheckemail] = useState(false);

  const takePhotoFromCamera = () => {

    ImagePicker.openCamera({
      compressImageMaxWidth: 300,
      compressImageMaxHeight: 300,
      cropping: true,
      compressImageQuality: 0.7
    }).then(image => {
      console.log(image);
      setImage(image.path);
      this.bs.current.snapTo(1);
    });
  }
  return (
    <SafeAreaView style={styles.safearea}>

      <View >
        <View style={{
          flexDirection: "row",
          marginLeft: 10,
          marginTop: 20,

        }}>
          <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
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
          borderRadius: 50,
          marginTop: 50,
          marginLeft: 3,
        }}><Image source={image === "" ? Icons.iconsuser96 : { uri: image }}

          style={{ width: 110, height: 110, borderRadius: 55, marginLeft: -2, marginTop: -6 }} />
          <TouchableOpacity onPress={takePhotoFromCamera}>
            <Image source={Icons.galleryicon}
              style={{ width: 30, height: 30, position: "absolute", left: 77, bottom: 1 }} /></TouchableOpacity></View>
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
        }} onPress={() => setcheckname(!checkname)}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.idcard} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            {checkname ? <Text style={{ marginTop: 24, marginLeft: 10 }}>jayant solanki</Text> :
              <TextInput 
              style={{ marginTop: 14, marginLeft: 10 ,width:145,}}
              placeholder='Name'></TextInput>}
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View style={{ width: 375, height: 70, borderWidth: 1, borderBottomColor: "#C0C0C0", borderColor: "#FFF" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.email} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            {checkemail ? <Text style={{ marginTop: 24, marginLeft: 10 }}>jayant_s@pixoatic.com</Text> :
            <TextInput 
            style={{ marginTop: 14, marginLeft: 10 ,width:245,}}
            placeholder='email'>
            </TextInput>}
          </View>
          </View>
          </TouchableOpacity>
      <TouchableOpacity>
        <View style={{ width: 375, height: 70, borderWidth: 1, borderBottomColor: "#C0C0C0", borderColor: "#FFF" }}>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.phonecall} style={{ width: 45, height: 45, marginTop: 10, marginLeft: 10 }} />
            <Text style={{ marginTop: 24, marginLeft: 10 }}>+91 7987473653</Text>
            <TextInput></TextInput>
          </View>
          </View>
          </TouchableOpacity>
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
