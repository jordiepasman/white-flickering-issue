import React from 'react'
import { View, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
// import { navigationRef, isReadyRef } from 'Services/NavigationService'
import { ApplicationStyles, Colors } from './App/Theme'
import RootStack from './App/Navigators/RootStack'

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <View style={ApplicationStyles.rootContainer}>
        <RootStack />
      </View>
    </NavigationContainer>
  )
}

export default App
