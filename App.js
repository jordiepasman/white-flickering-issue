import React from 'react'
import { View, StatusBar } from 'react-native'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
// import { navigationRef, isReadyRef } from 'Services/NavigationService'
import { ApplicationStyles, Colors } from './App/Theme'
import RootStack from './App/Navigators/RootStack'

const App = () => {
  // Already tried this but not the correct solution because we use one and white and black backgrounds through the app
  const MyTheme = {
    ...DefaultTheme,
    dark: false,
    colors: { background: 'transparent' }, // black, white, transparent ect ect...
  }

  return (
    <NavigationContainer
    // theme={MyTheme}
    >
      <StatusBar barStyle="light-content" backgroundColor={Colors.black} />
      <View style={ApplicationStyles.rootContainer}>
        <RootStack />
      </View>
    </NavigationContainer>
  )
}

export default App
