/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useState } from 'react'

import {
  TextInput,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';

const App = () => {

  const [name, setName] = useState('')

  const getName = () =>{

    let new_name = name
    setName('Hello :'+new_name)
  }
  return (

    // View is a container 
    <View>

      {/* text is used to display the text  */}
      <Text style={{ fontSize: 24, textAlign: "center" }}>Menu</Text>

      <View>
        <Text>Hello : {name}</Text>
      </View>

      <View>
        <TextInput
          style={style.textInput}
          value={name}
          placeholder='Enter your name .'
          onChangeText={(text)=>{setName(text)}}
        />


      </View>

      <View>
        <Button title='Submit' onPress={getName}  />

        <Button title='Clear' onPress={()=>{setName('')}}/>
      </View>

    </View >
  )
}


const style = StyleSheet.create({
  textInput: {
    borderWidth: 2,
    borderColor: 'red',
    borderRadius: 10,
    margin: 10
  }

})

export default App
