import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Details = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.smallText}>Details</Text>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },
  smallText: {
    fontSize: 30,
    color: 'black'

  }
})

export default Details
