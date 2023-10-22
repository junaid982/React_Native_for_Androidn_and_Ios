import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput ,Button} from 'react-native'

const App = () => {

  const [name , setName] = useState('')
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const [detailsFlag , setDetailsFlag] = useState(false)

  const clearDetails =() =>{
    setName('')
    setEmail('')
    setPassword('')
    setDetailsFlag(false)
  }

  return (
    <View>

      <View>
        <Text style={styles.heading}>
          React Native Form
        </Text>
      </View>

      <View>
        <TextInput
          style={styles.input}
          placeholder='Enter Name .'
          value={name}
          onChangeText={(text) => setName(text)}
        />

        <TextInput
          style={styles.input}
          placeholder='Enter Email .'
          value={email}
          onChangeText={(text) => setEmail(text)}
        />

        <TextInput
        secureTextEntry={true}
          style={styles.input}
          placeholder='Enter Password .'
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </View>

      <View style={styles.submitBtn}>
        <Button title='Submit Details' onPress={()=>{setDetailsFlag(true)}} />
      </View>

      <View style={styles.submitBtn}>
        <Button title='Clear Details' onPress={clearDetails} />
      </View>

      <View>
        {
          detailsFlag ?
          <View>
            <Text>Name : {name}</Text>
            <Text>Email : {email}</Text>
            <Text>Password : {password}</Text>

          </View>
          :
          null
        }
      </View>


    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    marginTop: 20,
    marginBottom: 20,
    shadowColor: 'blue'
  },

  input: {
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 10,
    margin: 10
  },

  submitBtn : {
    margin:10
  }

})

export default App
