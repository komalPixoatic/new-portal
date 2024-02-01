import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Dimensions, Platform, TouchableOpacity, ScrollView, Button, Modal, FlatList, StatusBarusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import Header from './Header';
import iconsuser from '../constant/assets'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
// import Modal from "react-native-modal";

import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

import LocationPermission from '../navigation/LocationPermission';
import { FadeIn } from 'react-native-reanimated';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        LocationPermission()
    }, []);

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);

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
                    <Image
                        source={Icons.manuIcon}
                        style={styles.manuIConsStl} />
                </TouchableOpacity>
            </View>
            <View style={styles.borderBtm}></View>
        </>
    }
    const userdata = {
        name: "jayant solanki",
        email: "jayant_S@pixoatic.com",
        profileimage: Icons.iconsuser,
    }
    // const images = [
    //     {
    //         id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    //         title: 'First Item',
    //         src: Icons.TajMahalAgrafeature
    //     },
    //     {
    //         id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    //         title: 'Second Item',
    //     },
    //     {
    //         id: '58694a0f-3da1-471f-bd96-145571e29d72',
    //         title: 'Third Item',
    //     },
    // ];
    //type ItemProps = { title: string };
    const [images, setimages] = useState([
        { src: Icons.TajMahalAgrafeature, key: '1' },
        { src: Icons.indiatravel, key: '2' },
        { src: Icons.BestSnowTouristDestinations, key: '3' },

    ]);
    const Item = ({ title }) => (
        <View style={styles.item}>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
    return (
        <View style={{ flex: 1, height: "100%", width: "100%", }}>
            <View style={styles.headercontainer}
            >
                <Image source={userdata.profileimage}
                    style={{ width: 45, height: 45, borderRadius: 99, }}
                />
                <Image source={Icons.logo}
                    style={{ width: 200, height: 45, objectFit: 'contain' }} />
                <Image source={Icons.iconsfilter}
                    style={{ width: 35, height: 35, objectFit: 'contain' }} />
            </View>
            <View style={{
                position: 'absolute',
                zIndex: 5,
                top: 55,
                padding: 10,
                width: '100%',
                paddingHorizontal: 20,
                flexDirection: "row",
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}><GooglePlacesAutocomplete
                    placeholder='Search loactions'
                    onPress={(data, details = null) => {
                        // 'details' is provided when fetchDetails = true
                        console.log(data, details);
                    }}
                    query={{
                        key: 'AIzaSyDetszvD8885M25pPWh37dP1LHkLIfeJ1c',
                        language: 'en',
                    }}
                /></View>
            <MapView
                style={{ flex: 1, height: "100%", width: "100%", }}
                initialRegion={{
                    latitude: 22.719568,
                    longitude: 75.857727,
                    latitudeDelta: 0.0422,
                    longitudeDelta: 0.0421,
                }}
                showsUserLocation={false}
                provider={MapView.PROVIDER_GOOGLE}    >

                <Marker
                    draggable
                    coordinate={{
                        latitude: 22.719568,
                        longitude: 75.857727,
                    }}
                    onDragEnd={
                        (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
                    }
                    title={'Test Marker'}
                    description={'This is a description of the marker'}
                >
                    <Image source={require('../../assets/mycar.png')}
                        style={{ width: 50, height: 50, }}></Image>
                </Marker>

            </MapView>
            <View style={{
                zIndex: 100,
                position: "absolute",
                bottom: 0,
                borderRadius: 10,
                margin: 5,
            }}>
                <FlatList
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={images}
                    renderItem={(item) => (
                        <View>
                            <Image source={item.item.src} style={{
                                width: Dimensions.get("screen").width * 0.9,
                                height: 200,
                                borderWidth: 2,
                                backgroundColor: "#white",
                                resizeMode: 'contain',
                                margin: 8,
                            }} />
                            <Text style={{
                                position: "absolute",
                                zIndex:10,
                                left:10,
                                bottom:10,
                            }}>jayant solanki</Text>
                        </View>
                    )}
                />
            </View>
            <SafeAreaView style={styles.container}>


                {/* <FlatList
                    data={DATA}
                    horizontal={true}
                    renderItem={({ item }) => <Item title={item.title} />}
                    keyExtractor={item => item.id} */}
                {/* /> */}
            </SafeAreaView>
        </View >

        // <SafeAreaView style={styles.container}>

        //     <Modal
        //         animationType="slide"
        //         visible={isModalVisible}
        //         onRequestClose={toggleModal}
        //     >
        //         <View style={{ flex: 1, width: dw / 1.15, backgroundColor: "#C8C8C8" }}>

        //             <TouchableOpacity
        //                 onPress={toggleModal}
        //                 style={{ alignSelf: 'flex-start' }}>
        //                 <Text style={{ textAlign: 'right', color: "#000", padding: 10, fontWeight: 'bold', fontSize: 15 }}>X</Text>
        //             </TouchableOpacity>
        //         </View>
        //     </Modal>

        //     <Modal
        //         animationType="slide"
        //         transparent={true}
        //         visible={isModalVisible2}
        //         onRequestClose={toggleModal2}
        //     >
        //         <View
        //             style={{
        //                 //flex: 1,
        //                 bottom: 0,
        //                 position: 'absolute',
        //                 //height: dh / 2.9,
        //                 width: dw / 1,
        //                 backgroundColor: "#FBFCFD",
        //                 borderTopLeftRadius: 10,
        //                 borderTopRightRadius: 10,
        //                 elevation: 13,
        //             }}>

        //             <TouchableOpacity
        //                 onPress={toggleModal2}
        //                 style={{ alignSelf: 'flex-end' }}>
        //                 <Text
        //                     style={{
        //                         textAlign: 'right',
        //                         color: "#000",
        //                         paddingVertical: 5,
        //                         paddingHorizontal: 8,
        //                         fontSize: 20,
        //                     }}>
        //                     X
        //                 </Text>
        //             </TouchableOpacity>

        //             <View style={styles.assistanceCnt}>
        //                 <Text style={{ fontWeight: 'bold' }}>Do you need special assistance?{" "}{" "}</Text>
        //                 <TouchableOpacity onPress={() => {
        //                     setModalVisible2(!isModalVisible2)
        //                     setModalVisible3(!isModalVisible3)
        //                 }}>
        //                     <Text style={{ textDecorationLine: 'underline', fontWeight: 'bold' }}>Click here</Text>
        //                 </TouchableOpacity>
        //             </View>

        //             <View style={styles.btnOptionM_Cnt}>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Hospital</Text>
        //                     <Text>Visit</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Assistance</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Wheel</Text>
        //                     <Text>Chair</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Book</Text>
        //                     <Text>Now</Text>
        //                 </TouchableOpacity>

        //             </View>
        //             <TouchableOpacity
        //                 style={styles.logInBtnStyl}>
        //                 <Text style={styles.txBtn}>
        //                     Search
        //                 </Text>
        //             </TouchableOpacity>

        //         </View>
        //     </Modal>
        //     <Modal
        //         animationType="slide"
        //         transparent={true}
        //         visible={isModalVisible3}
        //         onRequestClose={toggleModal3}
        //     >
        //         <View
        //             style={{
        //                 //flex: 1,
        //                 bottom: 0,
        //                 position: 'absolute',
        //                 //height: dh / 2.9,
        //                 width: dw / 1,
        //                 backgroundColor: "#FBFCFD",
        //                 borderTopLeftRadius: 10,
        //                 borderTopRightRadius: 10,
        //                 elevation: 13,
        //             }}>

        //             <TouchableOpacity
        //                 onPress={toggleModal3}
        //                 style={{ alignSelf: 'flex-end' }}>
        //                 <Text
        //                     style={{
        //                         textAlign: 'right',
        //                         color: "#000",
        //                         paddingVertical: 5,
        //                         paddingHorizontal: 8,
        //                         fontSize: 20,
        //                     }}>
        //                     X
        //                 </Text>
        //             </TouchableOpacity>

        //             <View style={{ width: dw / 1.08, marginBottom: 15, alignSelf: 'center' }}>
        //                 <Text style={{
        //                     fontWeight: 'bold',
        //                     fontSize: 18
        //                 }}>
        //                     Any special assistance</Text>
        //             </View>

        //             <View style={styles.btnOptionM_Cnt}>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Hospital</Text>
        //                     <Text>Visit</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Assistance</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Wheel</Text>
        //                     <Text>Chair</Text>
        //                 </TouchableOpacity>
        //                 <TouchableOpacity
        //                     style={styles.btnOptionCnt}>
        //                     <Text>Book</Text>
        //                     <Text>Now</Text>
        //                 </TouchableOpacity>

        //             </View>


        //             <View style={{ width: dw / 1.08, marginTop: 15, alignSelf: 'center' }}>
        //                 <Text style={{
        //                     fontWeight: 'bold',
        //                     fontSize: 18
        //                 }}>
        //                     Suggested Rides
        //                 </Text>
        //             </View>

        //             <TouchableOpacity
        //                 style={{
        //                     borderWidth: 1,
        //                     borderColor: "#F4F4F4",
        //                     height: dh / 15,
        //                     paddingHorizontal: 22,

        //                 }}>
        //                 <Image style={{ height: 40, width: 50 }} source={Icons.carImg} />
        //                 {/* <Text>Comfort line sedan</Text> */}
        //             </TouchableOpacity>
        //             <TouchableOpacity
        //                 style={{
        //                     borderWidth: 1,
        //                     borderColor: "#F4F4F4",
        //                     height: dh / 15,
        //                     paddingHorizontal: 22,

        //                 }}>
        //                 <Image style={{ height: 40, width: 50 }} source={Icons.carImg} />
        //             </TouchableOpacity>

        //             <TouchableOpacity
        //                 style={[styles.logInBtnStyl, { marginVertical: 10 }]}>
        //                 <Text style={styles.txBtn}>
        //                     Book Rides
        //                 </Text>
        //             </TouchableOpacity>
        //             <TouchableOpacity
        //                 style={[styles.logInBtnStyl, { marginVertical: 10, marginBottom: 20, backgroundColor: "#fff", borderWidth: 0.8 }]}>
        //                 <Text style={[styles.txBtn]}>
        //                     Reserve a trip
        //                 </Text>
        //             </TouchableOpacity>
        //         </View>
        //     </Modal>


        //     <ScrollView showsVerticalScrollIndicator={false}>
        //         <View style={styles.ContainerStl}>
        //             {headerView()}
        //             <View>
        //                 <View style={{
        //                     flex: 1,
        //                     position: 'absolute',
        //                     zIndex: 1
        //                     //paddingHorizontal: 25, 
        //                 }}>
        //                     <TextInput
        //                         placeholder='To'
        //                         style={styles.txInputViewStl}
        //                     />
        //                     <TextInput
        //                         placeholder='From'
        //                         style={styles.txInputViewStl}
        //                     />

        //                 </View>
        //             </View>
        //             <View style>
        //                 <MapView
        //                     style={{flex:1, height: "100%", width:"100%", backgroundColor: "red"}}
        //                     initialRegion={{
        //                         latitude: 22.719568,
        //                         longitude: 75.857727,
        //                         latitudeDelta: 0.0422,
        //                         longitudeDelta: 0.0421,
        //                     }}
        //                     showsUserLocation={false}
        //                     provider={MapView.PROVIDER_GOOGLE}    >

        //                     <Marker
        //                         draggable
        //                         coordinate={{
        //                             latitude: 22.719568,
        //                             longitude: 75.857727,
        //                         }}
        //                         onDragEnd={
        //                             (e) => alert(JSON.stringify(e.nativeEvent.coordinate))
        //                         }
        //                         title={'Test Marker'}
        //                         description={'This is a description of the marker'}
        //                     >
        //                     <Image source={require('../../assets/mycar.png')} 
        //                     style={{width:50,height:50,}}></Image>
        //                     </Marker>
        //                 </MapView>

        //             </View>

        //         </View>

        //     </ScrollView>
        // </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        backgroundColor: '#red',

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
    },

    container: {
        flex: 1,
        backgroundColor: '#black'
    },
    map: {
        width: '100%',
        height: "100%",
    },
    headercontainer: {
        position: 'absolute',
        zIndex: 10,
        padding: 10,
        width: '100%',
        paddingHorizontal: 20,
        flexDirection: "row",
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',

    },
    container: {
        //flex: 1,
        //marginTop: StatusBarusBar.currentHeight || 0,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

});

export default HomeScreen;
