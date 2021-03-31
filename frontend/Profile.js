import React, { Component, useContext } from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import {AuthContext} from './context.js';



export const Profile = ({navigate, data}) =>{
  const {signOut} = useContext(AuthContext);
  

  function dateDiff(date1, date2){
    return Math.round((date2 - date1)/(1000*60*60*24));
  }


  console.log(dateDiff);
        return (
          <View style={styles.container}>
            <View style={styles.rectRow}>
              <View style={styles.rect}><Image source={data.profileImage} style={styles.img}></Image></View>
              <View style={styles.nameColumn}>
                <Text style={styles.name}>
                  UserID: <Text style={styles.nameValue}>{data.userId}</Text>
                </Text>
                <Text style={styles.name}>
                  Name: <Text style={styles.nameValue}>{data.name}</Text>
                </Text>
                <Text style={styles.name}>
                  Address: <Text style={styles.nameValue}>{data.address}</Text>
                </Text>
                <Text style={styles.name}>
                  Phone #:{"  "}
                  <Text style={styles.nameValue}>{data.phoneNum}</Text>
                </Text>
              </View>
            </View>

            <View style={styles.backdrop}>
              <View style={styles.title1}>
                <Text style={styles.titlefont}>Covid Info</Text>
              </View>
              <ScrollView style={styles.scroll}>
              <Text style={styles.header}>Covid History</Text>
              {data.CovidTest.map((item, i)=>([
                <Text key={i} style={styles.testInfo}>{item.date} - {item.result} </Text>,
                <Text style={styles.datediff}>{'             -'} {dateDiff(new Date(item.date), new Date())} days ago</Text>
                
                
              ]))}

              <Text style={styles.header}>Vaccination History</Text>
              {data.Vaccinations.map((item, i)=>([
                <Text key={i} style={styles.testInfo}>{item.Type} - {item.date}</Text>,
                <Text style={styles.datediff}>{'             -'} {dateDiff(new Date(item.date), new Date())} days ago</Text>
              ]))}


              </ScrollView>
              

              
              
              
              <View style={styles.button}>
                <TouchableOpacity
                  style={styles.loginBtn}
                  onPress={() => signOut()}
                >
                  <Text style={styles.logout}>LogOut</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: '#d7efee'
  },
  datediff:{
    fontWeight: "bold"
  },
  container1: {
    flex: 1,
    flexDirection: "column",
    alignItems: "flex-start",
    backgroundColor: '#d1c69b',
    marginLeft: 20
  },
  title1: {
    
    alignItems: "center"
  },
  titlefont:{
    fontWeight: "bold",
      fontSize: 40,
      color: "#fb5b5a",
      marginBottom: 0,
      textDecorationLine: 'underline'
  },
  title: {
    width: 600,
    height: 54,
    backgroundColor: "white",
    borderWidth: 1,
    borderColor: "#000000",
    marginTop: 5,
  },
  rect: {
    borderWidth: 2,
    borderColor: "#000000",
    width: 145,
    height: 147
  },
  img:{
    width: 141,
    height: 144
  },
  name: {
    fontWeight: 'bold',
    fontSize: 18,
    color: "black",
    marginBottom: 10,
    
  },
  nameValue: {
    fontWeight: 'normal',
    fontSize: 15,
    textDecorationLine: 'underline',
    color: 'black'
  },
  nameColumn: {
    width: 200,
    marginLeft: 10,
    marginTop: 18,
  },
  rectRow: {
    flexDirection: "row",
    marginTop: 25,
    marginLeft: 10,
    marginRight: -5,
  },
  testInfo: {
    color: "#121212",
    marginBottom: 10,
    marginRight: 275,
    width: 50
  },
  testListing: {
    alignItems:"stretch",
    color: "#121212",
    marginTop: 0,
    marginRight: 100
  },
  testInfo1: {
    color: "#121212",
    marginTop: 25,
    marginRight: 275
  },
  testListing1: {
    color: "#121212",
    marginTop: 20,
    marginRight: 275
  },
  button: {
    marginTop: 175,
    marginLeft: 250,
  },
  backdrop: {
  
    width: 340,
    height: 425,
    marginTop: 20
  },
  header: {
    marginTop:5,
    fontSize: 25,
  },
  testInfo:{
    marginTop: 5,
    marginLeft: 20
  },
  loginBtn:{
    width:"150%",
    backgroundColor: "#9ee8e5",
    borderColor: "#3ea09b",
    borderWidth: 4,
    borderRadius:30,
    height:40,
    alignItems:"center",
    justifyContent:"center",
    marginTop:-5,
    marginBottom: 5,
    marginLeft: -45
  },
  logout: {
    fontWeight: "bold",
    fontSize: 20,
    color:"#3ea09b",
  },
  scroll:{
    marginTop: 10,
    marginBottom: -100,
    marginHorizontal: 10,
    
  }

});


