import React from 'react'
import { View, Text } from 'react-native'
import Style from './SettingsScreenStyle'

export default function SettingsScreen(props) {
  return (
    <View style={Style.center}>
      <Text style={{ color: 'white' }} onPress={() => props.navigation.navigate('Test')}>
        Settings Screen
      </Text>
    </View>
  )
}
