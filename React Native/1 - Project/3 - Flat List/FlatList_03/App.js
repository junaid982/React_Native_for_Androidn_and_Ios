import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'

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

  ]


  return (
    <View>
      <View>
        <Text style={styles.heading}>Example of Flat List </Text>
      </View>

      <FlatList
        data={users}
        renderItem={({ item }) => <Text style={styles.list}>{item.name}</Text>}
        keyExtractor={(key) => key.id}
      />

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    backgroundColor: 'lightgray',
    padding: 20,
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    marginBottom: 20
  },
  list: {
    fontSize: 20,
    borderWidth:1,
    borderColor: 'gray',
    margin:5,
    marginLeft:15,
    padding:10,
    borderRadius:5

  }

})

export default App
