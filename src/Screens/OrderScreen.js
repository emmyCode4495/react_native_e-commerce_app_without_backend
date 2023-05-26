import React, {useState} from 'react'
import {Box,ScrollView,Text,Heading } from 'native-base'
import colors from '../data/colors'
import OrderInfo from '../Components/OrderInfo'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import LocationIcon from 'react-native-vector-icons/Entypo';
import OrderItem from './OrderItem';
import OrderModel from './OrderModel';



function OrderScreen() {
  return (
    <Box bg={colors.subGreen} flex={1} safeArea pt={6}>
    <Box>
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        <OrderInfo 
        title="CUSTOMER"
        subTitle="John Doe"
        success
        text="admin@gmail.com"
        icon={<Icon name="user" size={30} color={colors.white}/>}
        />
        <OrderInfo 
        title="SHIPPING INFO"
        danger
        subTitle="Shipping: Tanzania"
        text="Pay Method: Paypal"
        icon={<Icons name="shipping-fast" size={30} color={colors.white}/>}
        />

      </ScrollView>      
    </Box>
    
    <Box px={6} flex={1} pb={3}>
      <Heading bold fontSize={15} isTruncated my={4}>
        PRODUCTS
      </Heading>
      <OrderItem/>
      {/* TOTAL */}
      <OrderModel/>
    </Box>
    
   </Box>
  )
}

export default OrderScreen;