import React from "react";
import {
    Text, View, StyleSheet,
    Image,
    TextInput,
    Dimensions,
    Platform,
    TouchableOpacity,
    ScrollView,
    SafeAreaView
} from 'react-native';


const Getotp = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.safearea}>
            <View>
                <Text style={styles.Text}>Get otp </Text>
                <Text style={styles.Text1}>Please enter 6 digit OTP sent to your mobile number</Text>

            </View>
            <View style={{ flexDirection: "row" }}>
                <View style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    marginTop: 75,
                    marginLeft: 15,
                    borderRadius: 5,
                    borderColor: "#6D6E70",
                }}></View>
                <View style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    marginTop: 75,
                    marginLeft: 5,
                    borderRadius: 5,
                    borderColor: "#6D6E70",
                }}></View>
                <View style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    marginTop: 75,
                    marginLeft: 5,
                    borderRadius: 5,
                    borderColor: "#6D6E70",
                }}></View>
                <View style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    marginTop: 75,
                    marginLeft: 5,
                    borderRadius: 5,
                    borderColor: "#6D6E70",
                }}></View>
                <View style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    marginTop: 75,
                    marginLeft: 5,
                    borderRadius: 5,
                    borderColor: "#6D6E70",
                }}></View>
                <View style={{
                    width: 50,
                    height: 50,
                    borderWidth: 1,
                    marginTop: 75,
                    marginLeft: 5,
                    borderRadius: 5,
                    borderColor: "#6D6E70",
                }}></View>

            </View>
            <View style={{ flexDirection: "row", alignSelf: "center", marginTop: 35 }}>
                <Text style={{ color: "#6D6E70" }}>Didn't recieve code ?
                </Text>
                <TouchableOpacity><Text> Resend (15s)</Text></TouchableOpacity>
                </View>
            <TouchableOpacity>
                <View style={{
                    width: 345, height: 50, backgroundColor: "#FFD65B", marginTop: 150,
                    //width: dw/1.15,
                    height: 60,
                    backgroundColor: "#FFD65B",
                    justifyContent: "center",
                    borderRadius: 10,
                    alignSelf: "center",
                }}>

                    <Text style={{ alignSelf: "center", }}>Verify</Text>
                </View></TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    safearea: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center',
        backgroundColor: '#F8FCFE',
    },
    Text: {
        fontWeight: "bold",
        marginTop: 140,
        fontSize: 20,
        marginLeft: 15,
    },
    Text1: {
        marginTop: 1,
        fontSize: 14,
        color: "#6D6E70",
        marginLeft: 15,
    },
});

export default Getotp;