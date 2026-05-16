/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type { PropsWithChildren } from 'react';
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, useColorScheme, View, } from 'react-native';

// Navigation
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Screens 
import Home from './screens/Home';
import Details from './screens/Details';

export type RootStackParamList = {
    Home: undefined;
    Details: { productId: string };
};

const stack = createNativeStackNavigator<RootStackParamList>()

function App(): JSX.Element {

    return (
        <NavigationContainer>
            <stack.Navigator>
                <stack.Screen name="Home" component={Home} />
                <stack.Screen name="Details" component={Details} />
                
            </stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
