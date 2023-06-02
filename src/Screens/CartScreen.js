import React from 'react'
import {Box,Button,HStack,ScrollView, Text,Center} from 'native-base'
import colors from '../data/colors'
import CartEmpty from '../Components/cartEmpty'
import CartItems from '../Components/CartItems'
import Buttone from '../Components/Buttone'
import { useNavigation } from '@react-navigation/native'

function CartScreen() {
  const navigation = useNavigation()
  return (
   <Box flex={1} safeAreaTop bg={colors.subGreen}>
    {/* HEADER */}
    <Center w='full' py={5}>
    <Text color={colors.black} fontSize={30} bold>Cart</Text>
    </Center>
    {/* IF CART IS EMPTY
    <CartEmpty /> */}
      {/* CART ITEMS */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <CartItems/>
        <Center mt={5}>
          <HStack
          rounded={50}
          justifyContent="space-between"
          bg={colors.white}
          shadow={2}
          w="90%"
          pl={5}
          h={45}
          alignItems="center"
          >
            <Text>TOTAL</Text>
            <Button
              px={10}
              h={45}
              rounded={50}
              bg={colors.main}
              _text={{
                color:colors.white,
                fontWeight:"semibold"
              }}
              _pressed={{
                bg:colors.main
              }}
            >
              $500
            </Button>
          </HStack>
        </Center>
              <Center px={5}>
                <Buttone bg={colors.black} color={colors.white} mt={10} bold
                  onPress={()=>navigation.navigate("Shipping")}
                >
                  CHECKOUT
                </Buttone>
              </Center>
      </ScrollView>
   </Box>
  )
}

export default CartScreen