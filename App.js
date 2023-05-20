import { StyleSheet, StatusBar, View } from 'react-native'
import React from 'react'
import { NativeBaseProvider, Box } from "native-base";

import HomeScreen from '../ReactEcommerceApp/src/Screens/HomeScreen'
import LoginScreen from '../ReactEcommerceApp/src/Screens/authScreens/LoginScreen'
import CreateAccountScreen from '../ReactEcommerceApp/src/Screens/authScreens/CreateAccountScreen'
import colors from '../ReactEcommerceApp/src/data/colors'
import NotVerifyScreen from '../ReactEcommerceApp/src/Screens/NotVerifyScreen'
import SingleProductScreen from '../ReactEcommerceApp/src/Screens/SingleProductScreen'
import CartScreen from '../ReactEcommerceApp/src/Screens/CartScreen'
import OrderScreen from '../ReactEcommerceApp/src/Screens/OrderScreen'

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar 
        barStyle="light content"
        backgroundColor= {colors.main} />
        <OrderScreen />
  </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"red"
    }
})