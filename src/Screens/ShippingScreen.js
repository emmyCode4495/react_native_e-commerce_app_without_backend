import { 
  Box,ScrollView,
  Center,
  FormControl,
  Text,
  Input, 
  VStack } from 'native-base'
import React from 'react'
import colors from '../data/colors'
import Buttone from '../Components/Buttone'

const shippingInputs=[
  {
    label:"ENTER CITY",
    type:"text"
  },
  {
    label:"ENTER COUNTRY",
    type:"text"
  },
  {
    label:"ENTER POSTAL CODE",
    type:"text"
  },
  {
    label:"ENTER ADDRESS",
    type:"text"
  },
]
function ShippingScreen() {
  return (
   <Box flex={1} safeAreaTop bg={colors.main} py={5}>
    {/* HEADER */}
    <Center pb={15}>
    <Text color={colors.white} fontSize={15} bold>
      DELIVERY ADDRESS
    </Text>
    </Center>
    {/* INPUT */}
    <Box h='full'
      bg={colors.white}
      px={5}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={6} mt={5}>
          {shippingInputs.map((i,index)=>(
              <FormControl key={index}>
              <FormControl.Label
                _text={{
                  fontSize:"12px",
                  fontWeight:"bold"
                }}
              >
                  {
                      i.label
                  }
              </FormControl.Label>
              <Input
                borderWidth={0.2}
                borderColor={colors.main}
                bg={colors.subGreen}
                py={4}
                color={colors.main}
                _focus={{
                  bg:colors.subGreen,
                  borderWidth:1,
                  borderColor:colors.main
                }}
              />
            </FormControl>
          ))}
          <Buttone bg={colors.main} 
          color={colors.white}
          mt={5}>
          CONTINUE
          </Buttone>
        </VStack>
      </ScrollView>

    </Box>
   </Box>
  )
}

export default ShippingScreen