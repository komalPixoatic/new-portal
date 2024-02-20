import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Dimensions, Platform, TouchableOpacity, ScrollView, Button, Modal, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';
// import Modal from "react-native-modal";
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

import LocationPermission from '../navigation/LocationPermission';

const TripScreen = ({ navigation }) => {

  useEffect(() => {
    LocationPermission()
    getCurrentLocation();
  }, []);

  const [currentLocation, setCurrentLocation] = useState(null);
  const [latitudePar, setlatitudePar] = useState('');
  const [longitudePar, setlongitudePar] = useState('');


  const [fromTxValue, setfromTxValue] = useState('');

  const getCurrentLocation = () => {
    setlatitudePar('')
    setlongitudePar('')
    console.log("Logs...")
    Geolocation.getCurrentPosition(
      position => {
        //const { latitude, longitude } = position.coords;
        ////setCurrentLocation({ latitude, longitude });
        console.log(position)
        //console.log("cordinate latitude: ",JSON.stringify(position.coords.latitude))
        // console.log("cordinate: ",longitude)
        //setlatitudePar(latitude)
        // setlongitudePar(longitude)
      },
      error => Alert.alert('Alert', JSON.stringify(error)),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
    );
  };


  const [isModalVisible, setModalVisible] = useState(false);
  const [isModalVisible2, setModalVisible2] = useState(false);
  const [isModalVisible3, setModalVisible3] = useState(false);
  const [isModalVisible4, setModalVisible4] = useState(true);


  const mapStyle = [
    { elementType: 'geometry', stylers: [{ color: '#242f3e' }] },
    { elementType: 'labels.text.fill', stylers: [{ color: '#746855' }] },
    { elementType: 'labels.text.stroke', stylers: [{ color: '#242f3e' }] },
    {
      featureType: 'administrative.locality',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'geometry',
      stylers: [{ color: '#263c3f' }],
    },
    {
      featureType: 'poi.park',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#6b9a76' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry',
      stylers: [{ color: '#38414e' }],
    },
    {
      featureType: 'road',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#212a37' }],
    },
    {
      featureType: 'road',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#9ca5b3' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry',
      stylers: [{ color: '#746855' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'geometry.stroke',
      stylers: [{ color: '#1f2835' }],
    },
    {
      featureType: 'road.highway',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#f3d19c' }],
    },
    {
      featureType: 'transit',
      elementType: 'geometry',
      stylers: [{ color: '#2f3948' }],
    },
    {
      featureType: 'transit.station',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#d59563' }],
    },
    {
      featureType: 'water',
      elementType: 'geometry',
      stylers: [{ color: '#17263c' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.fill',
      stylers: [{ color: '#515c6d' }],
    },
    {
      featureType: 'water',
      elementType: 'labels.text.stroke',
      stylers: [{ color: '#17263c' }],
    },
  ];

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const toggleModal2 = () => {
    setModalVisible2(!isModalVisible2);
  };
  const toggleModal3 = () => {
    setModalVisible3(!isModalVisible3);
  };

  const headerView = () => {
    return <>
      <View style={styles.HeaderViewStyle}>
        <TouchableOpacity
          onPress={toggleModal2}
          style={{ alignSelf: 'flex-start' }}>
          {/* <Image
            source={Icons.manuIcon}
            style={styles.manuIConsStl} /> */}
          <Text>Bottom Modal Btn</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.borderBtm}></View>
    </>
  }
  const [showUserLocation, setShowUserLocation] = useState(false);

  const toggleUserLocation = () => {
    setShowUserLocation(prevState => !prevState);
  };
  return (
    <SafeAreaView style={styles.safearea}>
      <Modal
        animationType="slide"
        visible={isModalVisible}
        onRequestClose={toggleModal}
      >
        <View style={{ flex: 1, width: dw / 1.15, backgroundColor: "#C8C8C8" }}>

          <TouchableOpacity
            onPress={toggleModal}
            style={{ alignSelf: 'flex-start' }}>
            <Text style={{ textAlign: 'right', color: "#000", padding: 10, fontWeight: 'bold', fontSize: 15 }}>X</Text>
          </TouchableOpacity>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible2}
        onRequestClose={toggleModal2}
      >
        <View
          style={{
            //flex: 1,
            bottom: 0,
            position: 'absolute',
            //height: dh / 2.9,
            width: dw / 1,
            backgroundColor: "#FBFCFD",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 13,
          }}>

          <TouchableOpacity
            onPress={toggleModal2}
            style={{ alignSelf: 'flex-end' }}>
            <Text
              style={{
                textAlign: 'right',
                color: "#000",
                paddingVertical: 5,
                paddingHorizontal: 8,
                fontSize: 20,
              }}>
              X
            </Text>
          </TouchableOpacity>

          <View style={styles.assistanceCnt}>
            <Text style={{ fontWeight: 'bold' }}>Do you need special assistance?{" "}{" "}</Text>
            <TouchableOpacity onPress={() => {
              setModalVisible2(!isModalVisible2)
              setModalVisible3(!isModalVisible3)
            }}>
              <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Click here</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.btnOptionM_Cnt}>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Hospital</Text>
              <Text>Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Assistance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Wheel</Text>
              <Text>Chair</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Book</Text>
              <Text>Now</Text>
            </TouchableOpacity>

          </View>
          <TouchableOpacity
            style={styles.logInBtnStyl}>
            <Text style={styles.txBtn}>
              Search
            </Text>
          </TouchableOpacity>

        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible3}
        onRequestClose={toggleModal3}
      >
        <View
          style={{
            //flex: 1,
            bottom: 0,
            position: 'absolute',
            //height: dh / 2.9,
            width: dw / 1,
            backgroundColor: "#FBFCFD",
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
            elevation: 13,
          }}>

          <TouchableOpacity
            onPress={toggleModal3}
            style={{ alignSelf: 'flex-end' }}>
            <Text
              style={{
                textAlign: 'right',
                color: "#000",
                paddingVertical: 5,
                paddingHorizontal: 8,
                fontSize: 20,
              }}>
              X
            </Text>
          </TouchableOpacity>

          {/* <View style={{ width: dw / 1.08, marginBottom: 15, alignSelf: 'center' }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 18
            }}>
              Any special assistance</Text>
          </View> */}

          {/* <View style={styles.btnOptionM_Cnt}>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Hospital</Text>
              <Text>Visit</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Assistance</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Wheel</Text>
              <Text>Chair</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btnOptionCnt}>
              <Text>Book</Text>
              <Text>Now</Text>
            </TouchableOpacity>

          </View> */}


          <View style={{ width: dw / 1.08, marginTop: 15, alignSelf: 'center' }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 18
            }}>
              Suggested Rides
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#F4F4F4",
              height: dh / 15,
              paddingHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'space-between'


            }}>
            <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image style={{ height: 40, width: 50, marginRight: 25 }} source={Icons.carImg} />
              <View>
              <Text>Auto Flex</Text>
              <Text>5 min away</Text>
              </View>
            </View>
            <View>
            <Text>50 ₹</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#F4F4F4",
              height: dh / 15,
              paddingHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'space-between'


            }}>
            <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image style={{ height: 40, width: 50, marginRight: 25 }} source={Icons.carImg} />
              <View>
              <Text>Auto Flex</Text>
              <Text>5 min away</Text>
              </View>
            </View>
            <View>
            <Text>50 ₹</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#F4F4F4",
              height: dh / 15,
              paddingHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent:'space-between'


            }}>
            <View style={{flexDirection:'row',alignItems: 'center',}}>
            <Image style={{ height: 40, width: 50, marginRight: 25 }} source={Icons.carImg} />
              <View>
              <Text>Auto Flex</Text>
              <Text>5 min away</Text>
              </View>
            </View>
            <View>
            <Text>50 ₹</Text>
            </View>
          </TouchableOpacity>
          

          <TouchableOpacity
            style={[styles.logInBtnStyl, { marginVertical: 10, marginBottom: 20 }]}>
            <Text style={styles.txBtn}>
              Book Rides
            </Text>
          </TouchableOpacity>
          {/* <TouchableOpacity
            style={[styles.logInBtnStyl, { marginVertical: 10, marginBottom: 20, backgroundColor: "#fff", borderWidth: 0.8 }]}>
            <Text style={[styles.txBtn]}>
              Reserve a trip
            </Text>
          </TouchableOpacity> */}
        </View>
      </Modal>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isModalVisible4}
      // visible={isModalVisible4}
      //onRequestClose={toggleModal4}
      >
        <View
          style={{
            backgroundColor: '#FFFFFF',
            flex: 1
          }}>
          <TouchableOpacity
            onPress={() => { navigation.goBack() }}
            style={{ padding: 7, marginVertical: 5, marginHorizontal: 15, alignSelf: 'flex-start' }}>
            <Image style={{}} source={Icons.leftArrowIcon} />
          </TouchableOpacity>
          <View style={{
            width: dw / 1.2,
            alignSelf: 'center'
          }}>
            <TextInput
              placeholder='To'
              style={styles.txInputViewStl}
            />
            <TextInput
              placeholder='From'
              style={styles.txInputViewStl}
              value={fromTxValue}
              onChangeText={(e) => setfromTxValue(e)}
              onSubmitEditing={(e) => {
                setModalVisible4(false)
                toggleModal3()
                console.log(fromTxValue)
              }
              }
            />
          </View>
          <View style={{ width: dw / 1.08, marginTop: 15, alignSelf: 'center' }}>
            <Text style={{
              fontWeight: 'bold',
              fontSize: 15,
              marginBottom: 15
            }}>
              Suggested Rides
            </Text>
          </View>

          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#F4F4F4",
              height: dh / 15,
              paddingHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Image style={{ height: 19, width: 15, marginHorizontal: 4 }} source={Icons.Vector} />
            <Text>C21, mall ab road</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#F4F4F4",
              height: dh / 15,
              paddingHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Image style={{ height: 19, width: 15, marginHorizontal: 4 }} source={Icons.Vector} />
            <Text>Airport road</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              borderWidth: 1,
              borderColor: "#F4F4F4",
              height: dh / 15,
              paddingHorizontal: 22,
              flexDirection: 'row',
              alignItems: 'center'
            }}>
            <Image style={{ height: 19, width: 15, marginHorizontal: 4 }} source={Icons.Vector} />
            <Text>Railway station</Text>
          </TouchableOpacity>
        </View>


      </Modal>


      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.ContainerStl}>

          {/* {headerView()} */}
          <View>
            {/* <View style={{
                            position: 'absolute',
                            zIndex: 1,
                            width: dw / 1.2,
                            alignSelf: 'center'
                        }}>
                            <TextInput
                                placeholder='To'
                                style={styles.txInputViewStl}
                            />
                            <TextInput
                                placeholder='From'
                                style={styles.txInputViewStl}
                            />

                        </View> */}

            {/* {Platform.OS=='android'? */}
            <>
              <MapView
                style={{ height: dh / 1.2, width: dw / 1 }}
                initialRegion={{
                  latitude: latitudePar == '' ? 22.719568 : latitudePar,
                  longitude: longitudePar == '' ? 75.857727 : longitudePar,
                  // latitude: currentLocation ? currentLocation?.latitude : 22.719568,
                  // longitude: currentLocation ? currentLocation?.longitude : 75.857727,
                  latitudeDelta: 0.1,
                  longitudeDelta: 0.5,
                }}
                customMapStyle={mapStyle}
                showsUserLocation={true}
              // showsMyLocationButton={true}
              // followsUserLocation={true}
              // showsCompass={true}
              // scrollEnabled={true}
              // zoomEnabled={true}
              // pitchEnabled={true}
              // rotateEnabled={true}
              // provider={PROVIDER_GOOGLE}
              >
                <Marker
                  draggable
                  coordinate={{
                    //     latitude: 22.719568,
                    // longitude: 75.857727,
                    latitude: latitudePar == '' ? 22.719568 : latitudePar,
                    longitude: longitudePar == '' ? 75.857727 : longitudePar,
                    // latitude: currentLocation.latitude,
                    // longitude: currentLocation.longitude,
                  }}
                  onDragEnd={
                    (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                  }
                  title={'Test Marker'}
                  description={'This is a description of the marker'}
                />
                <Marker
                  draggable
                  coordinate={{
                    //     latitude: 22.719568,
                    // longitude: 75.857727,
                    latitude: 24.076836,
                    longitude: 75.069298,
                    // latitude: currentLocation.latitude,
                    // longitude: currentLocation.longitude,
                  }}
                  onDragEnd={
                    (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                  }
                  title={'mds'}
                  description={'This is a description of the marker'}
                />
              </MapView>
              <View style={{ position: 'absolute', bottom: 80, zIndex: 1, alignSelf: 'center' }}>
                <Button
                  title={'Find My Location'}
                  onPress={getCurrentLocation}
                />
              </View></>
            {/* :null} */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    backgroundColor: '#F5F5F5',

  },
  ContainerStl: {
    flex: 1,
  },
  HeaderViewStyle: {
    height: dh / 15,
    justifyContent: 'center',
    paddingHorizontal: 25,
  },
  manuIConsStl: {
    height: 25,
    width: 25
  },
  borderBtm: {
    width: dw / 1,
    borderBottomWidth: 1,
    borderColor: "#DFE3E6"
  },
  txInputViewStl: {
    backgroundColor: '#F5F5F5',
    marginTop: 8,
    height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
    paddingHorizontal: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#DBDBDB"
  },
  logInBtnStyl: {
    marginHorizontal: 20,
    backgroundColor: "#FFD65B",
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
    marginVertical: 30
  },
  txBtn: {
    color: "#FFF",
    color: "#000",
    fontSize: 18,
    fontWeight: 'bold'
  },
  assistanceCnt: {
    flexDirection: 'row',
    alignSelf: 'center',
    backgroundColor: "#F1F9FF",
    width: dw / 1.08,
    height: dh / 18,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8
  },
  btnOptionM_Cnt: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  btnOptionCnt: {
    margin: 3,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F1F9FF',
    height: dh / 12,
    width: dw / 5,
    borderRadius: 8,
    borderColor: "#E3E6E8",
    borderWidth: 1
  }
});

export default TripScreen;