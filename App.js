import React from 'react'
import { NativeBaseProvider, StatusBar } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import colors from "../ReactEcommerceApp/src/data/colors"
import LoginScreen from "../ReactEcommerceApp/src/Screens/authScreens/LoginScreen"
import CreateAccountScreen from "../ReactEcommerceApp/src/Screens/authScreens/CreateAccountScreen"
import OrderScreen from "../ReactEcommerceApp/src/Screens/OrderScreen"
import BottomNav from "../ReactEcommerceApp/src/Navigations/BottomNav"

const Stack = createNativeStackNavigator();

export default function App() {
  
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <StatusBar 
      hidden={true} />
        <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown:false
        }}>
          <Stack.Screen name="Login" component={LoginScreen}/>
          <Stack.Screen name="Register" component={CreateAccountScreen}/>
          <Stack.Screen name="order" component={OrderScreen}/>
          <Stack.Screen name="Bottom" component={BottomNav}/>
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
  );
}

