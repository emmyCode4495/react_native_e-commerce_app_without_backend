import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from "native-base";

import HomeScreen from '../ReactEcommerceApp/src/Screens/HomeScreen'
import LoginScreen from '../ReactEcommerceApp/src/Screens/authScreens/LoginScreen'
import CreateAccountScreen from '../ReactEcommerceApp/src/Screens/authScreens/CreateAccountScreen'
import colors from '../ReactEcommerceApp/src/data/colors'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light content"
        backgroundColor= {colors.main} />
        <CreateAccountScreen />
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})