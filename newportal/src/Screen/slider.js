import React, { Component } from 'react'
import { AppRegistry, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icons from '../constant/assets'
import Swiper from 'react-native-swiper'

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'red',
        height: "80%",
    },
    slide1: {
        // flex: 1,
        height: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    slide2: {
        height: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    slide3: {
        height: "80%",
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
    },
    text: {
        marginTop: '550',
        color: '#000000',
        fontSize: 16,
        fontWeight: 'bold',
        // textAlign: 'left',
        width: '375',

    },

    text1: {
        marginTop: '550',
        color: '#9A9A9A',
        fontSize: 16,
        // fontWeight: 'bold',
        // textAlign: 'left',
        width: '375',
        padding: 30

    },
    taxi1: {
        width: 375,
        height: 275,
    },
    button1: {
        marginTop: 0,
        width: 375,
        height: 50,
        backgroundColor: "#FFD65B",
        justifyContent: "center",
        borderRadius: 10,
        marginLeft: 25,
        

    },
    button2: {
        marginTop: 25,
        width: 375,
        height: 50,
        backgroundColor: "#FFF",
        justifyContent: "center",
        borderColor: "#EEEEEE",
        borderWidth: 2,
        borderRadius: 10,
        marginLeft: 25,

    },
    skiptext: {
        alignSelf: "center",
        fontWeight: "bold",
    }
})

export default class SwiperComponent extends Component {
    render() {
        const tx1 =
            ``
        return (
            <View style={{ flex: 1, backgroundColor: "#fff" }}>
                <Swiper style={styles.wrapper}
                    showsButtons={false}
                    paginationStyle={{ bottom: 300 }}
                    activeDot={<View style={{ height: 5, width: 30, backgroundColor: "#000", borderRadius: 2 }} />}
                    buttonWrapperStyle={{ backgroundColor: 'transparent', flexDirection: 'row', position: 'absolute', top: 0, left: 0, flex: 1, paddingHorizontal: 10, paddingVertical: 10, justifyContent: "space-between", alignItems: "flex-end", }}>
                    <View style={styles.slide1}>
                        <Image source={Icons.taxi1}
                            style={styles.taxi1} />

                        <Text style={styles.text1}>We prioritize accessibility for all. Our cabs are equipped to accommodate wheelchairs, ensuring that every senior citizen, regardless of mobility challenges, can travel comfortably.</Text>
                    </View>
                    <View style={styles.slide2}>
                        <Image source={Icons.two}
                            style={styles.taxi1} />
                        <Text style={styles.text1}>Time is of the essence, and we understand the Importance of punctuality. Our drivers arrive on time, providing a reliable and efficient service for all your transportation needs.
                        </Text>
                    </View>
                    <View style={styles.slide3}>
                        <Image source={Icons.three}
                            style={styles.taxi1} />
                        <Text style={styles.text1}>Keep a close eye on your loved ones Our live tracking feature allows you to monitor their location with precision, providing peace of mind knowing they are safe.</Text>
                    </View>
                </Swiper>

                <View style={{ bottom: 100, position: "absolute", backgroundColor: "#FFF" }}>

                <TouchableOpacity style={styles.button1}><Text style={{ alignSelf: "center", fontWeight: "bold" }}>Next</Text></TouchableOpacity>

                    <TouchableOpacity style={styles.button2}>
                        <Text style={styles.skiptext}>Skip</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

AppRegistry.registerComponent('myproject', () => SwiperComponent)