import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const App = () => {

  const users = [
    {
      id: 1,
      name: 'Junaid'
    },
    {
      id: 2,
      name: 'Ansari'
    },
    {
      id: 3,
      name: 'Ahmad'
    },
    {
      id: 4,
      name: 'Aftab'
    },
    {
      id: 5,
      name: 'Badsha'
    },
    {
      id: 6,
      name: 'Mustafa'
    },
    {
      id: 7,
      name: 'Shaziya'
    },
    {
      id: 8,
      name: 'Sohail'
    },
    {
      id: 9,
      name: 'Rohan'
    },
    {
      id: 10,
      name: 'Raj'
    },
    {
      id: 11,
      name: 'Junaid'
    },
    {
      id: 12,
      name: 'Ansari'
    },
    {
      id: 13,
      name: 'Ahmad'
    },
    {
      id: 14,
      name: 'Aftab'
    },
    {
      id: 15,
      name: 'Badsha'
    },
    {
      id: 16,
      name: 'Mustafa'
    },
    {
      id: 17,
      name: 'Shaziya'
    },
    {
      id: 18,
      name: 'Sohail'
    },
    {
      id: 19,
      name: 'Rohan'
    },
    {
      id: 20,
      name: 'Raj'
    },

  ]
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>List With Map Function</Text>

      <View>
        <ScrollView >
          {
            users.map((item) => (
              <Text key={item.id} style={styles.list} >{item.id} {item.name}</Text>
            ))
          }
        </ScrollView>

      </View>

    </View>
  )
}


const styles = StyleSheet.create({
  container:{
    marginBottom:250,
  }
  ,
  heading: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 40,
    marginTop: 40,
  }
  ,
  list: {
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: 'red',
    backgroundColor: 'white',
    color: 'black'
  }
  
})

export default App
