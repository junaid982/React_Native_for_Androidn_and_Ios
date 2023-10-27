import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {
// do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    SplashScreen.hide();
  }, [])

  return (
    <View>
      <Text>App</Text>
    </View>
  )
}
export default App
