import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Dimensions, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CheckBox from '@react-native-community/checkbox';
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const SignUpScreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.ContainerStl}>
                    <Image
                        style={styles.IconStyl}
                        source={Icons.taxi} />
                    <Text style={styles.Txheading}>Create Account</Text>

                    <Text style={styles.lableStyle}>Full Name</Text>
                    <TextInput
                        placeholder='Enter your Name'
                        style={styles.txInputViewStl}
                    />

                    <Text style={styles.lableStyle}>Email</Text>
                    <TextInput
                        placeholder='Enter your Email Address'
                        style={styles.txInputViewStl}
                    />

                    <Text style={styles.lableStyle}>Phone Number</Text>
                    <TextInput
                        placeholder='Enter your Phone Number'
                        style={styles.txInputViewStl}
                    />

                    <Text style={styles.lableStyle}>Password</Text>
                    <TextInput
                        placeholder='Enter your Password'
                        style={styles.txInputViewStl}
                    />
                    <View style={styles.terms_Con_View}>
                        <CheckBox
                            value={isSelected}
                            onValueChange={setSelection}
                            boxType='square'
                        />
                        <Text style={styles.lableStyle}>I agree to the <Text style={{textDecorationLine: 'underline'}} onPress={() => { navigation.navigate("TermsAndConditionScreen") }}>Terms & Conditions</Text></Text>
                    </View>

                    <TouchableOpacity
                        style={styles.logInBtnStyl}>
                        <Text style={styles.txBtn}>
                            Sign Up
                        </Text>
                    </TouchableOpacity>

                    <View style={styles.dontHaveAccView}>
                        <Text style={styles.lableStyle}>Already have an account?</Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("LoginScreen") }}>
                            <Text style={[styles.lableStyle, { color: '#FDCC0D' }]}> Log In</Text>
                        </TouchableOpacity>
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
        paddingHorizontal: 25,
    },
    ContainerStl: {
        flex: 1,
    },
    IconStyl: {
        width: 70,
        height: 70,
        marginTop: 75,
        alignSelf: 'center'
    },
    Txheading: {
        color: "#000000",
        fontSize: 20,
        fontWeight: 'bold',
        paddingVertical: 15,
        alignSelf: 'center'
    },
    lableStyle: {
        color: "#A3A4A6",
        fontSize: 15,
        fontWeight: 'bold'
    },
    forgotPassTx: {
        color: "#A3A4A6",
        fontSize: 15,
        fontWeight: 'bold',
        color: "#A3A4A6",
        alignSelf: 'flex-end'
    },
    logInBtnStyl: {
        backgroundColor: "#FDCC0D",
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
        marginVertical: 20
    },
    txInputViewStl: {
        backgroundColor: '#FFFFFF',
        marginVertical: 8,
        height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
        paddingHorizontal: 12,
        borderRadius: 10
    },
    dontHaveAccView: {
        flexDirection: "row",
        alignSelf: "center",
    },
    txBtn: {
        color: "#FFF",
        fontSize: 15,
        fontWeight: 'bold'
    },
    terms_Con_View:{
        flexDirection:'row',
        alignItems:'center'
    },
    checkbox:{
        height:30,
        width:30
    }

});

export default SignUpScreen;
