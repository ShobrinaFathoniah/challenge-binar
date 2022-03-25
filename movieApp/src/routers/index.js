import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Detail, Home, Login, NoConnection, Registrasi, Welcome } from '../screens';

const Stack = createStackNavigator();

const routers = () => {
    return (
        <Stack.Navigator initialRouteName='Welcome'>
            <Stack.Screen
                name="Welcome"
                component={Welcome}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Registrasi"
                component={Registrasi}
                options={{ headerShown: false }}
            />
            <Stack.Screen 
                name='Login'
                component={Login}
                options={{headerShown: false}}
            />
            <Stack.Screen
                name="Home"
                component={Home}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="Detail"
                component={Detail}
                options={{ headerShown: false }}
            />
            <Stack.Screen
                name="NoConnection"
                component={NoConnection}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    );
};

export default routers;
