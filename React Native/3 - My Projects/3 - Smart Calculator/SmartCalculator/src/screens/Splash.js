// import { Button, StyleSheet, Text, View } from 'react-native'
// import React from 'react'

// const Splash = (props) => {

//   const navigateToHome = () => {
//     props.navigation.navigate('Home')
//   }

//   const navigateToAbout = () => {
//     props.navigation.navigate('About')
//   }

//   return (
//     <View>
//       <Text style={{ color: "black",fontSize: 40,textAlign: "center",
//       }} >
//         Splash
//       </Text>

//       {/* Navigation Home Button */}
//       <View style={{ marginTop: 10 }}>
//         <Button title="Home" color="#841584"
//           onPress={navigateToHome}
//         />
//       </View>

//       {/* Navigation About Button */}
//       <View style={{ marginTop: 10 }}>
//         <Button title="About" color="#841584"
//           onPress={navigateToAbout}
//         />
//       </View>

//     </View>
//   )
// }

// export default Splash




import { View, Text, Image, Animated } from 'react-native'
import React, { useEffect } from 'react'

const logo = '../../assets/images/logo.png'
const miniLogo = '../../assets/images/miniLogo.png'

const Splash = (props) => {

  useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Home')
    }, 2000)
  }, [])

  const fadeAnim = new Animated.Value(0)
  const rotateAnim = new Animated.Value(0)

  useEffect(() => {
    const fadeIn = Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    const rotate = Animated.timing(rotateAnim, {
      toValue: 1,
      duration: 1000,
      useNativeDriver: true,
    });

    Animated.sequence([fadeIn, rotate]).start();
  }, [fadeAnim, rotateAnim]);

  const rotateValue = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  })


  return (
    <View style={{
      backgroundColor: "black",
      flex: 1,
      borderColor: "red",
      // padding: 10,
      // borderWidth: 1
    }}>
      <View style={{
        // borderColor: "white",
        // borderWidth: 1,
        flex: 6,
        justifyContent: "center",
        alignItems: "center"
      }}
      >
        <Image source={require(logo)} />
      </View>

      <Animated.View style={[
        {
          // borderColor: "white",
          // borderWidth: 1,
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginBottom: 40
        },
        {
          opacity: fadeAnim,
          transform: [{ rotate: rotateValue }]
        }
      ]}>

        <Image source={require(miniLogo)} />

      </Animated.View>


    </View >
  )
}

export default Splash

