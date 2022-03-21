import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Detail, Home, Login, Registrasi } from '../screens';

const Stack = createStackNavigator();

const routers = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
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
            />
        </Stack.Navigator>
    );
};

export default routers;
