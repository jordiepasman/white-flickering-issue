import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import SettingsScreen from '../Containers/Settings/SettingsScreen'
import TestScreen from '../Containers/Test/TestScreen'
import { ApplicationStyles, Colors } from '../Theme'

const Stack = createStackNavigator()

export default function SettingStack(props) {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerTintColor: Colors.white,
        headerLeftContainerStyle: ApplicationStyles.navigation.headerLeftContainerStyle,
        headerBackTitleStyle: ApplicationStyles.navigation.headerBackTitleStyle,
        headerStyle: ApplicationStyles.navigation.headerStyle,
        headerBackTitleVisible: false,
      }}
    >
      <Stack.Screen
        name="Settings"
        options={{
          title: 'Settings',
        }}
        component={SettingsScreen}
      />

      <Stack.Screen
        name="Test"
        options={{
          title: 'Positions',
        }}
        component={TestScreen}
      />
    </Stack.Navigator>
  )
}
