import React, { Component } from "react";
import { StyleSheet, Text, View, Button, ScrollView, Pressable } from "react-native";
import MapView from "react-native-maps";

export const Map = ({ navigation }) => {
  return (
    <View style={styles.container}>
      
      <View style={styles.border}></View>
      <MapView
        provider={MapView.PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 43.796403560941506,
          longitude: -79.34933543213117,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
        customMapStyle={[]}
        style={styles.mapView}
      ></MapView>
      <Text style={styles.near}>  Nearby Stores  </Text>
      <ScrollView style={styles.scrollView}>
      <View style={styles.rect}>
        <Text style={styles.locName}> CF Fairview</Text>
      </View>
      <View style={styles.but1}>
        <Button color="#fb5b5a" title="Validate" onPress={() => alert("✅ Verified! You have been added to the list.")} />
      </View>
      <View style={styles.rect}>
        <Text style={styles.locName}> Loblaws</Text>
      </View>
      <View style={styles.but1}>
        <Button color="#fb5b5a"  title="Validate" onPress={() => alert("✅ Verified! You have been added to the list.")} />
      </View>
      <View style={styles.rect}>
        <Text style={styles.locName}> NoFrills</Text>
      </View>
      <View style={styles.but1}>
        <Button color="#fb5b5a"  title="Validate" onPress={() => alert("❌ You do not meet the verification requirements.")} />
      </View>
      <View style={styles.rect}>
        <Text style={styles.locName}> Best Buy</Text>
      </View>
      <View style={styles.but1}>
        <Button color="#fb5b5a"  title="Validate" onPress={() => alert("✅ Verified! You have been added to the list.")} />
      </View>
      <View style={styles.rect}>
        <Text style={styles.locName}> Sobeys</Text>
      </View>
      <View style={styles.but1}>
        <Button color="#fb5b5a"  title="Validate" onPress={() => alert("❌ You do not meet the verification requirements.")} />
      </View>
      <View style={styles.rect}>
        <Text style={styles.locName}> Seneca</Text>
      </View>
      <View style={styles.but1}>
        <Button color="#fb5b5a"  title="Validate" onPress={() => alert("❌ You do not meet the verification requirements.")} />
      </View>

      </ScrollView>
     
    </View>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    marginTop: 10,
    marginHorizontal: 10,
  },
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",

    backgroundColor: "#d7efee",
  },
  containerTitle: {
    fontSize: 20,
    marginBottom: -10,
    marginTop: 10,
    alignItems: "center",
   
  },
  button2Row: {
    height: 42,
    flexDirection: "row",
    flex: 1,
    marginRight: -1,
    marginTop: 380,
  },
  rect: {
    width: 325,
    height: 56,
    backgroundColor: "#9bd8d5",
    alignItems: "center",
    marginTop: 20,
    borderWidth: 1,
  },
  but1: {
    width: 87,
    height: 28,
    backgroundColor: "#E6E6E6",
    marginTop: -45,
    marginLeft: 220,
  },
  location: {
    color: "#121212",
    marginTop: 5,
    marginLeft: 245,
    fontSize: 30,
  },
  mapView: {
    height: 297,
    width: 345,
    borderRadius: 200,
    borderWidth: 1,
    overflow: "hidden",
    marginTop: -300,
  },
  locName:{
    marginTop: 10,
    alignSelf: "flex-start",
    fontSize: 25
  },
  border:{
    height: 301,
    width: 350,
    borderWidth: 1,
    marginTop: 5
  },
  near: {
    fontWeight: "bold",
      fontSize: 30,
      color: "#fb5b5a",
      marginTop: 20,
      textDecorationLine: 'underline'
  }
  //test
});
