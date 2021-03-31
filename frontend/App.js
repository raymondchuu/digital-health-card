import React, {useState, useEffect, useMemo} from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { AuthContext } from './context.js'
import { SignIn, CreateAccount } from "./Screens.js";
import {Map} from "./Map.js";
import {Profile} from "./Profile.js";
import {Validate} from "./Validate.js";
import {compareValues} from "./Verify.js";


const Authstack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const ProfileStack = createStackNavigator();

const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator >
      <HomeStack.Screen name="Map" component={Map} options={{ title: 'Map'}}/>
      <HomeStack.Screen name="Validate" component={Validate}/>
    </HomeStack.Navigator>
  )
};

const ProfileStackScreen = (props) => {
  console.log(props);
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" children={()=><Profile  data={props.data} />}/>
    </ProfileStack.Navigator>
  );
};

export default function App() {


  const [loginToken, setloginToken] = useState(null);
  const [data, setdata] = useState(null);
  const [tempdata, settempdata] = useState([]);


  const authContext = useMemo(() => {
    return{
      signIn: (user, pass) =>{
        var tempData = compareValues(user, pass);
        if(tempData){

          setloginToken('asdf');
          setdata(tempData);
          console.log(tempData);
        }else{
          alert("Invalid Credentials");
        }
      },
      signUp: () =>{

        setloginToken('asdf');
      },
      signOut: () =>{

        setloginToken(null);
      }
    }
  }, [])



  useEffect(() => {
    setTimeout(()=>{

    }, 1000)
  }, []);

  return (
    <AuthContext.Provider value={authContext}>
    <NavigationContainer>
      {loginToken ? (
        <Tab.Navigator
          initialRouteName="Profile"
          inactiveColor="#9bd8d5"
          activeColor="#ffa200"
          barStyle={{ backgroundColor: "#3ea09b" }}
        >
          <Tab.Screen
            name="Map"
            component={HomeStackScreen}
            options={{
              tabBarLabel: "Map",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="map-clock"
                  color={color}
                  size={25}
                />
              ),
            }}
            
          />
          <Tab.Screen
            name="Profile"
            children={() => <ProfileStackScreen data={data}/>}
            options={{
              tabBarLabel: "Profile",
              tabBarIcon: ({ color, size }) => (
                <MaterialCommunityIcons
                  name="account"
                  color={color}
                  size={25}
                />
              ),
            }}
          />
        </Tab.Navigator>
      ) : (
        <Authstack.Navigator>
          <Authstack.Screen name="SignIn" component={SignIn} />
          <Authstack.Screen name="CreateAccount" component={CreateAccount} />
        </Authstack.Navigator>
      )}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}
