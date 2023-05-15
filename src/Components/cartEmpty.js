import { Text, Box, Center} from 'native-base'
import React, { Component } from 'react'
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
import colors from '../data/colors';
import Buttone from './Buttone';

const CartEmpty = ()=> {
    return (
      <Box flex={1} >
        <Center h="90%">
            <Center w={200} h={200} bg={colors.white} rounded="full">
            <Icon 
            name="shopping-basket"
            type="FontAwesome"
            size={70}
            color={colors.main}
          />
            </Center>
            <Text color={colors.main} bold mt={5}>CART IS EMPTY</Text>
        </Center>
        <Buttone w="70%" bg={colors.main} color={colors.white}>
            START SHOPPING
            </Buttone>
      </Box>
   
    )
}

export default CartEmpty;