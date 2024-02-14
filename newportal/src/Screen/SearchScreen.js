import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, Platform, TextInput, Dimensions, TouchableOpacity, ScrollView, Modal, Switch } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
//import Modal from "react-native-modal";

const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const SearchScreen = ({ navigation }) => {

  const [modalVisible, setModalVisible] = useState(false)
  const [Switchenable, setSwitchenable] = useState(true)
  const [Switchenable1, setSwitchenable1] = useState(false)
  const [Switchenable2, setSwitchenable2] = useState(false)

  return (
    <ScrollView>
      <View style={styles.safearea}>
        <Modal visible={modalVisible}>
          <View style={{ flex: 1, backgroundColor: '#FFFFFF' }}>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginTop: 25,
              marginBottom: 10
            }}>
              <TouchableOpacity
                style={{ flexDirection: 'row', alignItems: 'center', }}
                onPress={() => setModalVisible(false)}>
                <Image
                  style={{ height: 15, width: 8 }}
                  source={Icons.leftArrowIcon} />
                <Text style={{ fontSize: 16, fontWeight: '400', color: '#393939', marginHorizontal: 13 }}>Filter</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  padding: 8,
                  paddingHorizontal: 17,
                  backgroundColor: '#F5F5F5',
                  justifyContent: 'center',
                  borderRadius: 7
                }}
              >
                <Text
                  style={{ fontSize: 10, color: '#616167' }}>RESET</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.lineSTL} />
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>Your budget</Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#949EB2' }}>Select</Text>
                <Image source={Icons.rightIcon} />
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>
                Star rating
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#949EB2' }}>Select</Text>
                <Image source={Icons.rightIcon} />
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>
                Review score
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#949EB2' }}>Select</Text>
                <Image source={Icons.rightIcon} />
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>
                Meals
              </Text>
              <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ color: '#949EB2' }}>Select</Text>
                <Image source={Icons.rightIcon} />
              </View>
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>
                Breakfast Included
              </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#7B51F1' }}
                thumbColor={Switchenable ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setSwitchenable(!Switchenable)}
                value={Switchenable}
              />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>
                Deals
              </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#7B51F1' }}
                thumbColor={Switchenable1 ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setSwitchenable1(!Switchenable1)}
                value={Switchenable1}
              />
            </View>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: dw / 1.12,
              alignSelf: 'center',
              marginVertical: 20,
            }}>
              <Text style={{ fontSize: 15, fontWeight: '400', color: '#393939', }}>
                Only show available
              </Text>
              <Switch
                trackColor={{ false: '#767577', true: '#7B51F1' }}
                thumbColor={Switchenable2 ? '#f4f3f4' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={() => setSwitchenable2(!Switchenable2)}
                value={Switchenable2}
              />
            </View>
          </View>
        </Modal>
        <View style={styles.searchView}>
          <Image
            style={styles.searchIconsStl}
            source={Icons.searchIcon} />
          <TextInput
            style={styles.TxInputStl}
            placeholder='Search for a hotel, package' />
        </View>
        <View style={styles.lineSTL} />
        <View style={
          {
            flexDirection: 'row',
            width: dw / 1.12,
            justifyContent: "space-between",
            paddingVertical: 13
          }
        }>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}
            style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Image
              style={{ height: 18, width: 18 }}
              source={Icons.FilterIcon} />
            <Text style={{ marginLeft: 8, fontSize: 16, color: "#7B51F1" }}>Filter</Text>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text style={{ fontSize: 16, color: "#7B51F1" }}>Custome package</Text>
          </TouchableOpacity>
        </View>
        <View style={[styles.lineSTL, { marginTop: 1 }]} />
        <Image source={Icons.one}
          style={{
            width: 356,
            height: 304,
            marginTop: 10
            // marginLeft: 20,
          }}></Image>
        <Image source={Icons.one}
          style={{
            width: 356,
            height: 304,
            marginTop: 10
            // marginLeft: 20,
          }}></Image>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    backgroundColor: '#FFFFFF',
    //marginTop: Platform.OS == 'ios' ? 50 : 1,
    paddingTop: Platform.OS == 'ios' ? 50 : 1,
    alignItems: 'center'
  },
  Text1: {
    fontSize: 25,
    fontWeight: "bold"
  },
  searchView: {
    flexDirection: 'row',
    alignItems: 'center',
    width: dw / 1.12,
    height: Platform.OS == 'ios' ? dh / 17 : dh / 15,
    borderRadius: 10,
    backgroundColor: '#F5F5F5',
    marginTop: 15
  },
  searchIconsStl: {
    marginLeft: 15,
    marginRight: 7,
    height: 13,
    width: 13
  },
  TxInputStl: {
    width: '80%'
  },
  lineSTL: {
    backgroundColor: '#F5F5F5', height: 1.5, width: '100%', marginTop: 10
  },

});

export default SearchScreen;
