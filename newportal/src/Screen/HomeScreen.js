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
    const [isModalVisible2, setModalVisible2] = useState(true);

    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };
    const toggleModal2 = () => {
        setModalVisible2(!isModalVisible2);
    };

    const headerView = () => {
        return <>
            <View style={styles.HeaderViewStyle}>
                <TouchableOpacity
                    onPress={toggleModal}
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
                        bottom:0,
                        position:'absolute',
                        height:dh/2,
                        width: dw / 1,
                        backgroundColor: "red"
                    }}>

                    <TouchableOpacity
                        onPress={toggleModal2}
                        style={{ alignSelf: 'flex-start' }}>
                        <Text
                            style={{
                                textAlign: 'right',
                                color: "#000",
                                padding: 10,
                                fontWeight: 'bold',
                                fontSize: 15
                            }}>
                            X
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



});

export default HomeScreen;
