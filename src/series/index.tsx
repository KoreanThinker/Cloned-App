import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home'
import Youtube from './Youtube';

const Stack = createStackNavigator();

function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='Youtube' component={Youtube} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default AppContainer;