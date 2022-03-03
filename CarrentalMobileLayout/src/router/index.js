import { StyleSheet, Text, View } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react'
import Home from '../pages/Home';
import Splash from '../pages/Splash';
import DaftarMobil from '../pages/DaftarMobil';
import Akun from '../pages/Akun';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="DaftarMobil" component={DaftarMobil} />
        <Tab.Screen name="Akun" component={Akun} />
    </Tab.Navigator>
  )
}

const Router = () => {
  return (
    <Stack.Navigator initialRouteName='Splash'>
        <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false}}/>
        <Stack.Screen name="MainApp" component={MainApp} options={{ headerShown: false}}/>
    </Stack.Navigator>
  )
}

export default Router

const styles = StyleSheet.create({})