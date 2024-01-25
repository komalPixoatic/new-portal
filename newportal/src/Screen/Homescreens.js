import {View, Text} from 'react-native-maps'
import React from 'react'
import { StyleSheet } from 'react-native'
//import AppMapView from './AppMapView'
import Header from './Header'

export default function Homescreen(){
    return(
        <View>
            <View style={styles.headerContainer}>
                {/* <Header/> */}
            </View>
            {/* <AppMapView/> */}
        </View>
    )
}
const styles = StyleSheet.create({
    headerContainer:{
        position:'absolute',
        zIndex:10,
        padding:10,
        width:'100%'

    }
})