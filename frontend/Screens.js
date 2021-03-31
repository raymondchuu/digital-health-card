import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AuthContext } from "./context.js";
import logo from "./assets/logo.png";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";



export const SignIn = ({ navigation }) => {
  const { signIn } = useContext(AuthContext);
  const [userName, setuserName] = useState("");
  const [pass, setpass] = useState("");

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
      <Text style={createSTY.logo}>
        EasyPass<Text>&#10140;</Text>
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Health Card #"
          style={styles.tempPlaceholder}
          onChangeText={(e) => setuserName(e)}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.tempPlaceholder}
          onChangeText={(e) => setpass(e)}
        ></TextInput>
      </View>

      <TouchableOpacity
        style={styles.loginBtn}
        onPress={() => signIn(userName, pass)}
      >
        <Text style={styles.loginColor}>Sign In</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.createBtn}
        onPress={() => navigation.push("CreateAccount")}
      >
        <Text style={styles.createColor}>Create Account</Text>
        
      </TouchableOpacity>
      
    </View>
  );
};

export const CreateAccount = ({ navigation }) => {
  const [userName, setuserName] = useState("");
  const [pass, setpass] = useState("");
  const { signIn } = useContext(AuthContext);

  return (
    <View style={createSTY.container}>
      <Text style={createSTY.logo}>
        EasyPass<Text>&#10140;</Text>
      </Text>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Health Card #"
          style={styles.tempPlaceholder}
          onChangeText={() => setuserName("54321")}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          style={styles.tempPlaceholder}
          onChangeText={() => setpass("aaa")}
        ></TextInput>
      </View>
      <View style={styles.inputView}>
        <TextInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          style={styles.tempPlaceholder}
        ></TextInput>
      </View>
      <TouchableOpacity
        style={createSTY.loginBtn}
        onPress={() => signIn(userName, pass)}
      >
        <Text style={createSTY.createText}>Create Account</Text>
        
      </TouchableOpacity>
      <Text><MaterialCommunityIcons name="credit-card-scan" size={50} color={"#fb5b5a"}></MaterialCommunityIcons></Text>
      <Text style={styles.scan}>Scan</Text>
    </View>
  );
};

export const Splash = () => {
  return (
    <View>
      <Text>Loading....</Text>
    </View>
  );
};

const createSTY = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bd8d5",
    alignItems: "center",
    justifyContent: "center",
  },
  
  logo: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 50,
  },
  loginBtn: {
    width: "55%",
    borderWidth: 4,
    borderColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 75,
  },
  createText: {
    fontWeight: "bold",
    color: "#fb5b5a",
    fontSize: 20,
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9bd8d5",
    alignItems: "center",
    justifyContent: "center",
  },

  inputView: {
    width: "80%",
    backgroundColor: "#DEF2F1",
    borderRadius: 25,
    height: 50,
    marginBottom: 10,
    justifyContent: "center",
    padding: 25,
  },
  tempPlaceholder: {
    height: 50,
    color: "black",
  },
  tempPlaceholder1: {
    color: "#DEF2F1",
    height: 34,
    width: "80%",
    borderWidth: 1,
    borderColor: "#000000",
    marginBottom: 50,
    alignSelf: "center",
  },
  buttons: {
    width: "80%",
    backgroundColor: "white",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  lowerSection: {
    backgroundColor: "#DEF2F1",
    width: "100%",
  },
  logo: {
    width: "100%",
    height: 115,
    resizeMode: "contain",
    marginTop: -50,
  },
  loginBtn: {
    width: "80%",
    backgroundColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  createBtn: {
    width: "80%",
    borderWidth: 4,
    borderColor: "#fb5b5a",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 5,
    marginBottom: 5,
  },
  loginColor: {
    color: "black",
    fontSize: 18,
    fontWeight: "bold",
  },
  createColor: {
    color: "#fb5b5a",
    fontSize: 18,
    fontWeight: "bold",
  },
  scan:{
    color: "#fb5b5a",
    fontSize: 30
  }
});
