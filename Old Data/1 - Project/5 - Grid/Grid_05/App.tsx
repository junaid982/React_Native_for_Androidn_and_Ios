import React from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

const App = () => {


  const users = [
    {
      id: 1,
      name: "Junaid"
    }
    ,
    {
      id: 2,
      name: "Ansari"
    }
    ,
    {
      id: 3,
      name: "Ahmad"
    }
    ,
    {
      id: 4,
      name: "Aftab"
    }
    ,
    {
      id: 5,
      name: "Sohail"
    }
    ,
    {
      id: 7,
      name: "Harsh"
    }
    ,
    {
      id: 8,
      name: "Nitesh"
    }
    ,
    {
      id: 9,
      name: "John"
    }
    ,
    {
      id: 10,
      name: "Tushar"
    }
    ,
    {
      id: 11,
      name: "Junaid"
    }
    ,
    {
      id: 12,
      name: "Ansari"
    }
    ,
    {
      id: 13,
      name: "Ahmad"
    }
    ,
    {
      id: 14,
      name: "Aftab"
    }
    ,
    {
      id: 15,
      name: "Sohail"
    }
    ,
    {
      id: 17,
      name: "Harsh"
    }
    ,
    {
      id: 18,
      name: "Nitesh"
    }
    ,
    {
      id: 19,
      name: "John"
    }
    ,
    {
      id: 20,
      name: "Tushar"
    }
    ,
    {
      id: 1,
      name: "Junaid"
    }
    ,
    {
      id: 2,
      name: "Ansari"
    }
    ,
    {
      id: 3,
      name: "Ahmad"
    }
    ,
    {
      id: 4,
      name: "Aftab"
    }
    ,
    {
      id: 5,
      name: "Sohail"
    }
    ,
    {
      id: 7,
      name: "Harsh"
    }
    ,
    {
      id: 8,
      name: "Nitesh"
    }
    ,
    {
      id: 9,
      name: "John"
    }
    ,
    {
      id: 10,
      name: "Tushar"
    }
    ,
    {
      id: 11,
      name: "Junaid"
    }
    ,
    {
      id: 12,
      name: "Ansari"
    }
    ,
    {
      id: 13,
      name: "Ahmad"
    }
    ,
    {
      id: 14,
      name: "Aftab"
    }
    ,
    {
      id: 15,
      name: "Sohail"
    }
    ,
    {
      id: 17,
      name: "Harsh"
    }
    ,
    {
      id: 18,
      name: "Nitesh"
    }
    ,
    {
      id: 19,
      name: "John"
    }
    ,
    {
      id: 20,
      name: "Tushar"
    }
    ,


  ]





  return (
    <View>
      <Text style={styles.heading}>React Native Grid</Text>

      <ScrollView>
        <View style={styles.row}>
          {
            users.map((item) =>
              <Text style={styles.column} key={item.id}>{item.name}</Text>

            )
          }

        </View>
      </ScrollView>

    </View>
  )
}

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: 'black',
    margin: 20
  }
  ,
  row: {
    flax: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  }
  ,
  column: {
    flexDirection: 'column',
    fontSize: 25,
    backgroundColor: 'blue',
    color: 'white',
    margin: 5,
    padding: 5,
    width: 120,
    height: 120,
    textAlign: 'center',
    textAlignVertical: "center"
  }
})

export default App
