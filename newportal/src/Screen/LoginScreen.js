import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Image, TextInput, Dimensions, Platform, TouchableOpacity, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
const dw = Dimensions.get('window').width;
const dh = Dimensions.get('window').height;

const LoginScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safearea}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.ContainerStl}>
                <Image
                    style={styles.IconStyl}
                    source={Icons.taxi} />
                <Text style={styles.Txheading}>Log In to Your Account</Text>
                <Text style={styles.lableStyle}>Email</Text>
                <TextInput
                    placeholder='Enter your Email'
                    style={styles.txInputViewStl}
                />
                <Text style={styles.lableStyle}>Password</Text>
                <TextInput
                    placeholder='Enter your Password'
                    style={styles.txInputViewStl}
                />
                <TouchableOpacity
                onPress={()=>{navigation.navigate("ForgotPasswordScreen")}}>
                    <Text style={styles.forgotPassTx}>Forgot password?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={()=>navigation.navigate("MainComponent")}
                    style={styles.logInBtnStyl}>
                    <Text style={styles.txBtn}>
                        Log In
                    </Text>
                </TouchableOpacity>

                <View style={styles.dontHaveAccView}>
                    <Text style={styles.lableStyle}>Don't have an account?</Text>
                    <TouchableOpacity
                    onPress={()=>{navigation.navigate("SignUpScreen")}}>
                        <Text style={[styles.lableStyle, { color: '#FDCC0D' }]}> Sign Up</Text>
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
        marginVertical: 55
    },
    txInputViewStl:{
        backgroundColor: '#FFFFFF',
        marginVertical: 8,
        height: Platform.OS == 'android' ? dh / 15.5 : dh / 19.5,
        paddingHorizontal: 12,
        borderRadius:10
    },
    dontHaveAccView:{
        flexDirection: "row",
        alignSelf: "center",
    },
    txBtn:{
        color: "#FFF",
        fontSize: 15,
        fontWeight: 'bold'
    }

});

export default LoginScreen;
