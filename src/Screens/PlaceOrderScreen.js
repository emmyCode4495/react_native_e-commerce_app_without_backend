import React from 'react'
import {Box,ScrollView,Text,Heading } from 'native-base'
import colors from '../data/colors'
import OrderInfo from '../Components/OrderInfo'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/FontAwesome5';
import LocationIcon from 'react-native-vector-icons/Entypo';
import OrderItem from './OrderItem';
import PlaceOrderModel from './PlaceOrderModel';

function PlaceOrderScreen() {
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
        text="admin@gmail.com"
        icon={<Icon name="user" size={30} color={colors.white}/>}
        />
        <OrderInfo 
        title="SHIPPING INFO"
        subTitle="Shipping: Tanzania"
        text="Pay Method: Paypal"
        icon={<Icons name="shipping-fast" size={30} color={colors.white}/>}
        />

<OrderInfo 
        title="DELIVER TO"
        subTitle="Address"
        text="Arusha Tz, Ngaramatoni Crater,"
        icon={<LocationIcon name="location-pin" size={30} color={colors.white}/>}
        />  
      </ScrollView>      
    </Box>
    
    <Box px={6} flex={1} pb={3}>
      <Heading bold fontSize={15} isTruncated my={4}>
        PRODUCTS
      </Heading>
      <OrderItem/>
      {/* TOTAL */}
      <PlaceOrderModel/>
    </Box>
    
   </Box>
  )
}

export default PlaceOrderScreen;