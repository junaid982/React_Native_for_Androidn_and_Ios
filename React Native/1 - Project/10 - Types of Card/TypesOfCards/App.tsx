import { View, Text, ScrollView, SafeAreaView } from 'react-native'
import React from 'react'
import FlatCard from './components/FlatCard'
import ElevatedCard from './components/ElevatedCard'

const App = () => {
  return (
    <View>

      <SafeAreaView>
        <ScrollView>

          <FlatCard />

          <ElevatedCard />

        </ScrollView>
      </SafeAreaView>

    </View>
  )
}

export default App