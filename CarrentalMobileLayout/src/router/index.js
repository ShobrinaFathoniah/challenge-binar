import { StyleSheet } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home, DaftarMobil, Akun } from '../screens';
import { BottomNavigator } from '../components';
import React from 'react';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
      <Tab.Screen
        name="DaftarMobil"
        component={DaftarMobil}
        options={{ headerShown: false }}
      />
      <Tab.Screen name="Akun" component={Akun} options={{ headerShown: false }} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export default Router;

const styles = StyleSheet.create({});
