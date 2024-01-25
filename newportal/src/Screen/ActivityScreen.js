// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icons from '../constant/assets'
// import MapboxGL from "@rnmapbox/maps";

// MapboxGL.setAccessToken("<YOUR_ACCESSTOKEN>");
// MapboxGL.setConnected(true);

// const ActivityScreen = ({ navigation }) => {

//   return (
//     <SafeAreaView style={styles.safearea}>
//       <View >
//         <Text style={styles.Text1}>
//         Activity Screen</Text>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safearea: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     backgroundColor: '#FFD65B',
//   },
//   Text1: {
//     fontSize: 35,
//     fontWeight: "bold"
//   },
// });

// export default ActivityScreen;
import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
//import MapboxGL from "@rnmapbox/maps";

//MapboxGL.setAccessToken("<pk.eyJ1IjoiamF5YW50c29sMDA3IiwiYSI6ImNscnEyNzhuOTAwaHcyamtoaDZweHZ6cWwifQ.BvaxJQIqopqxRRap8-nT-g>");

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  container: {
    height: 300,
    width: 300,
    backgroundColor: "tomato"
  },
  map: {
    flex: 1
  }
});

export default class App extends Component {
  componentDidMount() {
    //MapboxGL.setTelemetryEnabled(false);
  }

  render() {
    return (
      <View style={styles.page}>
        <View style={styles.container}>
          {/* <MapboxGL.MapView style={styles.map} /> */}
        </View>
      </View>
    );
  }
}