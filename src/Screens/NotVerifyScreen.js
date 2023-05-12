import { Center, Box,Image,VStack,Button } from 'native-base'
import React from 'react'
import colors from '../data/colors'
import Buttone from '../Components/Buttone'

function NotVerifyScreen() {
  return (
 <Box flex={1} bg={colors.main} safeAreaTop>
  <Center w='full' h={250}>
    <Image source={require("../assets/bag.png")}
      alt="shoping bag logo"
      size="lg"
    />
  </Center>
  <VStack space={6} px={5} alignItems="center">
    <Buttone bg={colors.black} color={colors.white}>REGISTER</Buttone>
    <Buttone bg={colors.white} color={colors.black}>LOG IN</Buttone>
  </VStack>
 </Box>
  )
}

export default NotVerifyScreen