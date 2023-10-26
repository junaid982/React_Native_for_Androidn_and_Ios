import React, { useEffect } from 'react';
import { View, Text } from 'react-native';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    // This code will run when the component is mounted
    // You can perform any tasks you need here, such as loading data or resources
    // After your tasks are completed, hide the splash screen
    SplashScreen.hide();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>My App Content</Text>
    </View>
  );
};

export default App;