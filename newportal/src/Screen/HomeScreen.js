
import React, { useState, useEffect, } from 'react';
import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity,Dimensions,Platform,BackHandler,Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const HomeScreen = ({ navigation }) => {
    useEffect(() => {
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
    
        return () => backHandler.remove();
      }, [navigation]);
    return (
        <ScrollView style={styles.safearea}>
            <View style={{paddingHorizontal:20}}>
            <View style={{
                flexDirection: "row",
                justifyContent: "space-between",
                //paddingHorizontal: 20,
                marginTop: 20,
                alignItems:'center'
            }}>
                <TouchableOpacity>
                    <Image source={Icons.Group257}
                        style={{ width: 39, height: 39 }} />
                </TouchableOpacity>
                <View style={{}}>
                    <Text style={{
                        color: "#8D94A2",
                        fontWeight: "400",
                        fontSize: 12,
                        marginLeft: 4
                    }}>
                        Current Location
                    </Text>

                    <View style={{
                        flexDirection: "row",
                        alignItems: 'center',
                        marginVertical: 5
                    }}>
                        <Image source={Icons.Vector}
                            style={{
                                width: 10,
                                height: 13,
                                marginRight: 5
                            }}
                        />
                        <Text
                            style={{ fontWeight: 'bold' }}>Indore, India</Text>
                        <View>
                        </View>
                    </View>
                </View>
                <TouchableOpacity>
                    <Image source={Icons.Ellipse1}
                        style={{ width: 39, height: 39 }} />
                </TouchableOpacity>
            </View>
            <View >
                <Text style={styles.Text1}>
                    Plan your ride</Text>
            </View>
            <View style={{
                flexDirection: "row",
                //paddingHorizontal: 15,
                justifyContent: 'space-between',
                marginTop: 10,
            }}>
                <TouchableOpacity>
                    <Image source={Icons.Group313}
                        style={{
                            width: 105,
                            height: 105,
                        }}></Image>
                    <Text style={{ textAlign: 'center' }}>Trip</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Icons.Group314}
                        style={{
                            width: 105,
                            height: 105,
                        }}></Image>
                    <Text style={{ textAlign: 'center' }}>intercity</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={Icons.Group311}
                        style={{
                            width: 105,
                            height: 105,
                        }}></Image>
                    <Text style={{ textAlign: 'center' }}>Rental</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.Text2}>Near by Destination</Text>
            <Image source={Icons.Group290}
                style={{
                    width: 222,
                    height: 143,
                    // marginLeft: 20,
                    // paddingHorizontal: 20,
                    marginTop: 14,
                }}></Image>
            <Image source={Icons.offer}
                style={{
                    width: dw/1.12,
                    height: dh/10,
                    alignSelf: "center",
                    marginTop: 14,
                    
                }}></Image>
            <Text style={styles.Text3}>
                Plan your ride</Text>
            <Image source={Icons.one}
                style={{
                    width: 356,
                    height: 304,
                    marginTop:5
                    // marginLeft: 20,
                }}></Image>
                </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        marginTop:Platform.OS=='ios'?50:1
    },
    Text1: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#2A2A2A',
        marginTop: 34,
    },
    Text2: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#2A2A2A',
        marginTop: 14,
    },
    Text3: {
        fontSize: 18,
        fontWeight: "bold",
        color: '#2A2A2A',
        marginTop: 14,
    },
});
export default HomeScreen;