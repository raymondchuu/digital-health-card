import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Map from './Map.js'
import Profile from './Profile.js'


const Tab = createMaterialBottomTabNavigator();

export default function Main() {
  return (
    <NavigationContainer>
       <Tab.Navigator
         initialRouteName="Home"
         activeColor="#f0edf6"
         inactiveColor="#000000"
         barStyle={{ backgroundColor: '#d9b73b' }}
       >
        <Tab.Screen name="Map" component={Map} 
        options={{
          tabBarLabel: 'Map',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="map-clock" color={color} size={25} />
          ),
        }}
          />
        <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={25} />
          ),
        }}
      />
      </Tab.Navigator>
    </NavigationContainer>
  );

  
}

