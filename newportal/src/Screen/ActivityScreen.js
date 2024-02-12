// import React, { useState, useEffect } from 'react';
// import { Text, View, StyleSheet, Image } from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Icons from '../constant/assets'

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

import React, { useState, useEffect,} from 'react';
import { Text, View, StyleSheet, Image , ScrollView} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icons from '../constant/assets'
const ActivityScreen = ({ navigation }) => {
  return (
    <ScrollView style={styles.safearea}>
      <View style={{
        flexDirection: "row", justifyContent: "space-between",
        paddingHorizontal: 5,
        marginVertical: 20
      }}>
        <View>
          <Image source={Icons.Group257}
            style={{ width: 39, height: 39 }} />
        </View>
        <View style={{ flexDirection: "column" }}>
          <Text style={{
            color: "#8D94A2",
            fontWeight: "400",
            fontSize: 12
          }}>
            Current Location
          </Text>
          <View style={{ flexDirection: "row" }}>
            <Image source={Icons.Vector}
              style={{ width: 13, height: 16 }} />
            <Text>Indore, India</Text>
            <View>
            </View>
          </View>
        </View>
        <Image source={Icons.Ellipse1}
          style={{ width: 39, height: 39 }} />
      </View>
      <View >
        <Text style={styles.Text1}>
          Plan your ride</Text>
      </View>
      <View style={{
        flexDirection: "row",
        paddingHorizontal: 18,
        justifyContent: 'space-between',
        marginTop: 10,
      }}>
        <View>
          <Image source={Icons.Group313}
            style={{
              width: 105,
              height: 105,
            }}></Image>
          <Text style={{ textAlign: 'center' }}>Trip</Text>
        </View>
        <View>
          <Image source={Icons.Group314}
            style={{
              width: 105,
              height: 105,
            }}></Image>
          <Text style={{ textAlign: 'center' }}>intercity</Text>
        </View>
        <View>
          <Image source={Icons.Group311}
            style={{
              width: 105,
              height: 105,
            }}></Image>
          <Text style={{ textAlign: 'center' }}>Rental</Text>
        </View>
      </View>
      <Text style={styles.Text2}>Near by Destination</Text>
      <Image source={Icons.Group290}
        style={{
          width: 222,
          height: 143,
          marginLeft: 15,
          marginTop: 14,
        }}></Image>
      <Image source={Icons.offer}
        style={{
          width: 358,
          height: 79,
          alignSelf: "center",
          marginTop: 14
        }}></Image>
      <Text style={styles.Text3}>
        Plan your ride</Text>
      <Image source={Icons.one}
        style={{
          width: 356,
          height: 304,
          marginLeft: 10,
        }}></Image>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  safearea: {
    flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  Text1: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#2A2A2A',
    marginTop: 34,
    marginLeft: 10,
  },
  Text2: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#2A2A2A',
    marginTop: 14,
    marginLeft: 10,
  },
  Text3: {
    fontSize: 18,
    fontWeight: "bold",
    color: '#2A2A2A',
    marginTop: 14,
    marginLeft: 10,
  },
});
export default ActivityScreen;