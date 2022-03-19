import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { Detail, Home } from '../screens';

const Stack = createStackNavigator();

const routers = () => {
    return (
        <Stack.Navigator>
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
