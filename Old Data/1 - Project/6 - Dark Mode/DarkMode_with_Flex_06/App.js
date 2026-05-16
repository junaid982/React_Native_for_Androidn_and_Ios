import React from 'react'
import {
  Text,
  View,
  StyleSheet,
  useColorScheme,
  SafeAreaView
} from 'react-native'

const App = () => {

  const isDarkMode = useColorScheme() === 'dark'

  return (


    <View style={styles.container}>

      {/* <Text style={isDarkMode ? styles.whiteText : styles.darkText} > */}
      <Text>
        Test
      </Text>

    </View>


  )
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderBlockColor: 'white',
    padding: 20,
    fontSize: 20,
    flex: 1,
    // == move X axis  (left right center ) ====
    // alignItems:'flex-start',  
    // alignItems:'center',
    // alignItems : 'flex-end',

    // == move y axis (top bottom center )====
    // justifyContent : 'flex-start',
    // justifyContent: 'center',
    justifyContent: 'flex-end'
  }
  ,
  whiteText: {
    color: 'white'
  }
  ,
  darkText: {
    color: 'black'
  }
})

export default App
