import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const About = (props) => {

  const navigateToSplash = () => {
    props.navigation.navigate('Splash')
  }

  const navigateToHome = () => {
    props.navigation.navigate('Home')
  }
  return (
    <View>
      <Text
        style={{ color: "black", fontSize: 40, textAlign: "center" }}
      >About
      </Text>

      {/* Navigation to Splash Screen */}
      <View style={{ marginTop: 10 }}>
        <Button title='Splash'
          onPress={navigateToSplash}
        />
      </View>

      {/* Navigation to Home Screen */}
      <View style={{ marginTop: 10 }}>
        <Button title='Home'
          onPress={navigateToHome}
        />
      </View>

    </View>
  )
}

export default About
