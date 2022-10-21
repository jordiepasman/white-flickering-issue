import * as React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { ApplicationStyles, Colors } from '../Theme'
import HomeScreen from '../Containers/Home/HomeScreen'

const Stack = createStackNavigator()

export default function HomeStack(props) {
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
        name="Home"
        options={{
          title: 'Home',
        }}
        component={HomeScreen}
      />
    </Stack.Navigator>
  )
}
