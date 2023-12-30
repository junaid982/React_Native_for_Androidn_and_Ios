import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Splash = (props) => {

  const navigateToHome = () => {
    props.navigation.navigate('Home')
  }

  const navigateToAbout = () => {
    props.navigation.navigate('About')
  }

  return (
    <View>
      <Text style={{ color: "black",fontSize: 40,textAlign: "center",
      }} >
        Splash
      </Text>

      {/* Navigation Home Button */}
      <View style={{ marginTop: 10 }}>
        <Button title="Home" color="#841584"
          onPress={navigateToHome}
        />
      </View>

      {/* Navigation About Button */}
      <View style={{ marginTop: 10 }}>
        <Button title="About" color="#841584"
          onPress={navigateToAbout}
        />
      </View>

    </View>
  )
}

export default Splash

