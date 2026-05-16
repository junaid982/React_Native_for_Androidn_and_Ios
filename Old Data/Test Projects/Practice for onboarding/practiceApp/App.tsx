import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage'
import Onboarding from './src/onboarding/Onboarding';
import Home from './src/screens/Home';
import Splash from './src/components/Splash';

const Stack = createNativeStackNavigator();

const App = () => {
  const [fistLaunch, setFisrtLaunch] = useState(null)

  useEffect(() => {
    AsyncStorage.getItem('firstLaunch').then(value => {
      if (value === null) {
        AsyncStorage.setItem("firstLaunch", "false")
        setFisrtLaunch(true);
      } else {
        setFisrtLaunch(false)
      }

    }
    })
}, [])


return (
  <NavigationContainer>

    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Splash' component={Splash} />
      <Stack.Screen name='Onboading' component={Onboarding} />
      <Stack.Screen name='Home' component={Home} />
    </Stack.Navigator>
  </NavigationContainer>
)
}

export default App