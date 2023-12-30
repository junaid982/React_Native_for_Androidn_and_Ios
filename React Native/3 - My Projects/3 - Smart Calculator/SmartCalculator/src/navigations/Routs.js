
import React from 'react'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Splash from '../screens/Splash'
import Home from '../screens/Home'
import About from '../screens/About'
import Privacy from '../screens/Privacy'

const stack = createNativeStackNavigator()

const Routs = () => {
  return (
    <NavigationContainer>

      <stack.Navigator
        initialRouteName='Splash'
        screenOptions={{ headerShown: false }}
      >

        <stack.Screen name="Splash" component={Splash} />
        <stack.Screen name='Privacy' component={Privacy} />
        <stack.Screen name="Home" component={Home} />
        <stack.Screen name="About" component={About} />

      </stack.Navigator>

    </NavigationContainer>
  )
}

export default Routs
