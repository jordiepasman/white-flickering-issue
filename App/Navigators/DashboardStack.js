import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import DashboardScreen from '../Containers/Dashboard/DashboardScreen'
import { ApplicationStyles, Colors } from '../Theme'

const Stack = createStackNavigator()

export default function DashboardStack(props) {
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
        name="Dashboard"
        options={{
          title: 'Dashboard',
        }}
        component={DashboardScreen}
      />
    </Stack.Navigator>
  )
}
