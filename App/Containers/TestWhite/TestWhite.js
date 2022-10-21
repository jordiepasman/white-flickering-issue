import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import Style from './TestWhiteStyle'

export default function TestWhite(props) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
      <Image
        style={{ width: '100%', height: 300 }}
        source={{
          uri: 'https://images.pexels.com/photos/5912965/pexels-photo-5912965.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        }}
      />

      <View style={{ padding: 20 }}>
        <Text style={{ fontSize: 18 }} numberOfLines={2}>
          What is Lorem Ipsum?
        </Text>
        <View style={Style.information}>
          <Text style={Style.informationItem}></Text>
        </View>
      </View>
    </ScrollView>
  )
}
