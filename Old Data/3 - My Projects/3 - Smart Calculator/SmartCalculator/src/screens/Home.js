import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Home = (props) => {

  const navigateToSplash = () => {
    props.navigation.navigate('Splash')
  }

  const navigateToAbout = () => {
    props.navigation.navigate('About')
  }
  return (
    <View>
      <Text
        style={{ color: "black", fontSize: 40, textAlign: "center" }}
      >Home
      </Text>

      {/* Navigate to Splash Screen  */}
      <View style={{ marginTop: 10 }}>
        <Button title='Splash'
          onPress={navigateToSplash}
        />
      </View>

      {/* Navigate to About Screen  */}
      <View style={{ marginTop: 10 }}>
        <Button title='About'
          onPress={navigateToAbout}
        />
      </View>

    </View>
  )
}

export default Home
