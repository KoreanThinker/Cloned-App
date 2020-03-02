import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './Home'
import Youtube from './Youtube/screens';

const Stack = createStackNavigator();

function AppContainer() {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{ headerShown: false }}
                initialRouteName='Home'
            >
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name='Youtube' component={Youtube} />
            </Stack.Navigator>
        </NavigationContainer >
    );
}

export default AppContainer;