import React, { useEffect } from 'react'
import { View } from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'
import TestWhite from '../Containers/TestWhite/TestWhite'
import TabStack from './TabStack'
import { ApplicationStyles, Colors } from '../Theme'

const Stack = createStackNavigator()

export default function RootStack() {
  return (
    <View style={ApplicationStyles.rootContainer}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: Colors.white,
          headerBackTitleStyle: ApplicationStyles.navigation.headerBackTitleStyle,
          headerStyle: ApplicationStyles.navigation.headerStyle,
          headerBackTitleVisible: false,
        }}
        presentation="modal"
      >
        <Stack.Screen name="Home" component={TabStack} options={{ headerShown: false }} />

        {/* Modals: */}
        <Stack.Screen
          name="TestWhite"
          component={TestWhite}
          options={{
            title: 'What is Lorem Ipsum?',
          }}
        />
      </Stack.Navigator>
    </View>
  )
}
