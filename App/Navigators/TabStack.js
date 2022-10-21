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
        tabBarActiveTintColor: Colors.secondary,
        tabBarInactiveTintColor: Colors.primary,
        tabBarStyle: ApplicationStyles.navigation.tabBar.tabBarStyle,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName
          let title
          let text

          switch (route.name) {
            case 'Dashboard':
              iconName = 'dashboard-3-line'
              title = 'Dashboard'
              color = focused ? Colors.secondary : Colors.icon
              text = focused ? Colors.white : Colors.icon
              break
            case 'Home':
              iconName = 'archive-line'
              title = 'Home'
              color = focused ? Colors.secondary : Colors.icon
              text = focused ? Colors.white : Colors.icon
              break
            case 'Settings':
              iconName = 'settings-3-line'
              title = 'Settings'
              color = focused ? Colors.secondary : Colors.icon
              text = focused ? Colors.white : Colors.icon
              break
            default:
              iconName = ''
              color = Colors.lightGrey
          }

          return (
            <View style={ApplicationStyles.navigation.tabBar.container}>
              {/* <Icon name={iconName} size={28} color={color} type="remix" /> */}

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
