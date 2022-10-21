/* eslint-disable react-native/no-color-literals */
import React from 'react'
import { ScrollView, View, Text } from 'react-native'

export default function TestScreen(props) {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: 'black' }}>
      <Text>Test Screen</Text>

      <View
        style={{ justifyContent: 'space-between', flexDirection: 'row', paddingHorizontal: 20 }}
      >
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginTop: 30,
        }}
      >
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
      </View>

      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginTop: 30,
        }}
      >
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
      </View>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          paddingHorizontal: 20,
          marginTop: 30,
        }}
      >
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
        <View style={{ backgroundColor: 'grey', width: 160, height: 180 }}></View>
      </View>
    </ScrollView>
  )
}
