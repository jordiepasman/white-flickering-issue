import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { View, Text } from 'react-native'
import HomeStack from './HomeStack'
import { ApplicationStyles, Colors } from '../Theme'
import SettingStack from './SettingsStack'
import DashboardStack from './DashboardStack'

const Tab = createBottomTabNavigator()

export default function TabStack(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: Colors.primary,
        tabBarStyle: ApplicationStyles.navigation.tabBar.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let title
          let text

          switch (route.name) {
            case 'Dashboard':
              title = 'Dashboard'
              text = focused ? Colors.white : Colors.icon
              break
            case 'Home':
              title = 'Home'
              text = focused ? Colors.white : Colors.icon
              break
            case 'Settings':
              title = 'Settings'
              text = focused ? Colors.white : Colors.icon
              break
            default:
              color = Colors.lightGrey
          }

          return (
            <View style={ApplicationStyles.navigation.tabBar.container}>
              <Text style={[ApplicationStyles.navigation.tabBar.text, { color: text }]}>
                {title}
              </Text>
            </View>
          )
        },
      })}
    >
      <Tab.Screen name="Dashboard" component={DashboardStack} />
      <Tab.Screen name="Home" component={HomeStack} />
      <Tab.Screen name="Settings" component={SettingStack} />
    </Tab.Navigator>
  )
}
