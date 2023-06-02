import {View, Text, StyleSheet} from 'react-native'
import React from "react"
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import ContactIcon from 'react-native-vector-icons/AntDesign';
import ShoppingIcon from 'react-native-vector-icons/FontAwesome5';
import MaterialIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNav from '../Navigations/StackNav'

import colors from '../data/colors';
import HomeScreen from '../Screens/HomeScreen';
import { Center, Pressable } from 'native-base';
import ProfileScreen from '../Screens/ProfileScreen';
import CartScreen from '../Screens/CartScreen';


const Tab = createBottomTabNavigator()
const CustomTab =({
    children, onPress
})=>(<Pressable 
onPress={onPress} 
h={70} 
w={70} 
_pressed = {{bg: colors.black}}
rounded="full" 
bg={colors.main} 
top={-30}
shadow={2}>
    {children}
</Pressable>);

const BottomNav = () =>{
    return (
        <Tab.Navigator 
        backBehavior="Main"
        initialRouteName='Main'
        screenOptions={{
            tabBarShowLabel:false,
            tabBarStyle:{...styles.tab},
            headerShown:false,
            tabBarHideOnKeyboard:true
        }}>
            <Tab.Screen 
            name="Main" 
            component={StackNav} 
            options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <Icons name="home" size={24} color={colors.main}/>
                        ): (
                            <ContactIcon name="home" size={24} color={colors.black}/>
                        )}
                    </Center>
                )
            }}/>

            {/* CART */}
            <Tab.Screen 
            name="Cart" 
            component={CartScreen} 
            options={{
                tabBarButton:(props) => <CustomTab {...props}/>,
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <ShoppingIcon name="shopping-basket" size={24} color={colors.white}/>
                        ): (
                            <MaterialIcon name="shopping-outline" size={24} color={colors.white}/>
                        )}
                    </Center>
                )
            }}/>

            {/* PROFILE */}
            <Tab.Screen 
            name="Profile" 
            component={ProfileScreen} 
            options={{
                tabBarIcon:({focused})=>(
                    <Center>
                        {focused ? (
                            <Icon name="user" size={24} color={colors.main}/>
                        ): (
                            <ContactIcon name="user" size={24} color={colors.black}/>
                        )}
                    </Center>
                )
            }}/>
        </Tab.Navigator>
    )
}

export default BottomNav;

const styles = StyleSheet.create({
    tab:{
        elevation:0,
        backgroundColor:colors.white,
        height: 60,
    }
})