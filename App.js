import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from "native-base";

import HomeScreen from '../ReactEcommerceApp/src/Screens/HomeScreen'
import LoginScreen from '../ReactEcommerceApp/src/Screens/authScreens/LoginScreen'
import colors from '../ReactEcommerceApp/src/data/colors'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light content"
        backgroundColor= {colors.main} />
        <LoginScreen />
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})