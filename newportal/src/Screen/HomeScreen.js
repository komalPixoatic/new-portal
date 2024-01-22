import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Dimensions, Platform, TouchableOpacity, ScrollView, Button, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// import Modal from "react-native-modal";
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

import LocationPermission from '../navigation/LocationPermission';

const HomeScreen = ({ navigation }) => {

    useEffect(() => {
        LocationPermission()
    }, []);

    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [isModalVisible3, setModalVisible3] = useState(false);

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
                        <TouchableOpacity onPress={()=>{
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

                    <View style={{ width: dw / 1.08,marginBottom:15, alignSelf: 'center' }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>
                            Any special assistance</Text>
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
                    

                    <View style={{ width: dw / 1.08,marginTop:15, alignSelf: 'center' }}>
                        <Text style={{
                            fontWeight: 'bold',
                            fontSize: 18
                        }}>
                            Suggested Rides
                            </Text>
                    </View>

                    <TouchableOpacity 
                    style={{
                        borderWidth:1,
                        borderColor:"#F4F4F4",
                        height:dh/15,
                        paddingHorizontal:22,

                    }}>
                        <Image style={{height:40,width:50}} source={Icons.carImg}/>
                        {/* <Text>Comfort line sedan</Text> */}
                    </TouchableOpacity>
                    <TouchableOpacity 
                    style={{
                        borderWidth:1,
                        borderColor:"#F4F4F4",
                        height:dh/15,
                        paddingHorizontal:22,

                    }}>
                        <Image style={{height:40,width:50}} source={Icons.carImg}/>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.logInBtnStyl,{marginVertical: 10}]}>
                        <Text style={styles.txBtn}>
                            Book Rides
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={[styles.logInBtnStyl,{marginVertical: 10,marginBottom: 20,backgroundColor: "#fff",borderWidth:0.8}]}>
                        <Text style={[styles.txBtn]}>
                            Reserve a trip
                        </Text>
                    </TouchableOpacity>
                </View>
            </Modal>



            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ContainerStl}>
                    {headerView()}
                    <View style={{ paddingHorizontal: 25, }}>
                        <TextInput
                            placeholder='To'
                            style={styles.txInputViewStl}
                        />
                        <TextInput
                            placeholder='From'
                            style={styles.txInputViewStl}
                        />

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

export default HomeScreen;
