import React from 'react'
import { Box,Center,FormControl,HStack,Image,Input,ScrollView,Spacer,Text, VStack } from 'native-base'
import colors from '../data/colors'
import Buttone from '../Components/Buttone'

import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import CheckIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


const paymentMethods=[
  {
    image:require("../assets/paypal.png"),
    alt:"paypal",
    icon:"CheckIcon"
  },
  {
    image:require("../assets/discover.png"),
    alt:"discover",
    icon:"Icons"
  },
  {
    image:require("../assets/googlepay.png"),
    alt:"googlepay",
    icon:"Icons"
  },
  {
    image:require("../assets/mastercard.png"),
    alt:"mastercard",
    icon:"Icons"
  },
]
function PaymentScreen() {
  const navigation = useNavigation()
  return (
    <Box flex={1} safeAreaTop bg={colors.main} py={5}>
    {/* HEADER */}
    <Center pb={15}>
    <Text color={colors.white} fontSize={15} bold>
      SELECT PAYMENT METHOD
    </Text>
    </Center>
    {/* Selection */}
    <Box h='full'
      bg={colors.white}
      px={5}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5}>
          {
            paymentMethods.map((i,index)=>(
          
          <HStack 
          alignItems="center" 
          bg={colors.white}
          key={index}
          px={3}
          py={1}
          rounded={10} 
          justifyContent="space-between">
            <Box>
              <Image 
              source={i.image}
              alt={i.alt}
              resizeMode="contain"
              w={60}
              h={50}/>
              <Spacer />
              
            </Box>
            {i.icon === "CheckIcon" ? <CheckIcon 
              name="checkcircle"
              size={30} 
              color={colors.main}/>:<Icons 
              name="circle"
              color={colors.main}
              size={30}
              /> }
          </HStack>
            ))
          }
          <Buttone bg={colors.main} 
          color={colors.white}
          mt={5} onPress={()=>navigation.navigate("Placeorder")}>
          CONTINUE
          </Buttone>
          <Text italic textAlign="center">
            Payment method is <Text bold>"Paypal"</Text> by default
          </Text>
        </VStack>
      </ScrollView>

    </Box>
   </Box>
  )
}

export default PaymentScreen