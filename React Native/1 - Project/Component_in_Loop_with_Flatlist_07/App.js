import React from 'react'
import { FlatList, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import users from './asserts/userData'



function App() {


  const List = (props) => {
    const item = props.item
    return (
      <View style={styles.box}>

        <Text style={styles.item}>{item.name}</Text>
        <Text style={styles.item}>{item.email}</Text>

      </View>

    )
  }




  return (
    <SafeAreaView>
      <View>

        <View >
          <Text style={styles.component}>Component with Loop</Text>
        </View>
        <ScrollView>

          <FlatList
            data={users}
            renderItem={({ item }) => <List item={item} />}
            keyExtractor={item => item.id}
          />

        </ScrollView>


      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  component: {
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 10
  }
  ,
  box: {
    borderWidth: 1,
    borderBlockColor: 'black',

    flexDirection: 'row',
    padding: 10,
    margin: 10,
  }
  ,
  item: {
    fontSize: 24,
    color: 'black',
    flex: 1

  }

})

export default App
