/* eslint-disable react-native/no-inline-styles */
import React from 'react'
import { ScrollView, View, Text, Image } from 'react-native'
import { Colors } from '../../Theme'

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
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              bottom: 0,
              color: Colors.icon,
              textTransform: 'uppercase',
            }}
          ></Text>
        </View>
      </View>
    </ScrollView>
  )
}
