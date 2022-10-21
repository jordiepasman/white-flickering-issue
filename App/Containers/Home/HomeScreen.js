import React from 'react'
import { View, TouchableOpacity, Text } from 'react-native'
import Style from './HomeScreenStyle'

export default function HomeScreen(props) {
  return (
    <View style={Style.center}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate('TestWhite')}
        // eslint-disable-next-line react-native/no-inline-styles
        style={{ marginTop: 20 }}
      >
        <Text style={Style.click}>Example screen</Text>
      </TouchableOpacity>
    </View>
  )
}
