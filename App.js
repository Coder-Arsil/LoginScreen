import { StyleSheet, Text, View , StatusBar } from 'react-native'
import React from 'react'
import LoginScreen from './screens/LoginScreen'
import YellowCircle from './screens/YellowCircle'
import Welcome from './screens/Welcome'

const App = () => {
  return (
    <View style={{flex:1,backgroundColor:'#0E0E0E'}}>
      <StatusBar
        // backgroundColor='#2b2b2b',
        hidden
      />
      <Welcome />
      <YellowCircle />
      <LoginScreen />
    </View>
  )
}

export default App

const styles = StyleSheet.create({})