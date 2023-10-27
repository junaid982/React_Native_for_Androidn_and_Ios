// import React from 'react'
// import { Text, View } from 'react-native'
// import SplashScreen from 'react-native-splash-screen'

// const App = () => {
//   useEffect(() => {

//     // do stuff while splash screen is shown
//     // After having done stuff (such as async tasks) hide the splash screen

//     SplashScreen.hide();
//   }, [])


//   return (
//     <View>
//       <Text>My App</Text>
//     </View>
//   )
// }

// export default App

import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

const App = () => {

  useEffect(() => {

    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen

    SplashScreen.hide();
  }, [])

  return (
    <View>
      <Text>My App</Text>
    </View>
  )
}

export default App
