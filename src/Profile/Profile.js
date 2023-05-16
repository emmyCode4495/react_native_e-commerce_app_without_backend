import { View, Text } from 'react-native'
import React from 'react'
import colors from '../data/colors'
import { Box, Input,FormControl, ScrollView, VStack } from 'native-base'
import Buttone from '../Components/Buttone'

const Inputs=[
{
  label:"USERNAME",
  type:"text"
},
{
  label:"EMAIL",
  type:"email"
},
{
  label:"NEW PASSWORD",
  type:"password"
},
{
  label:"CONFIRM PASSWORD",
  type:"password"
},
]
const Profiles = () => {
  return (
    <Box h="full" bg={colors.white} px={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={10} mt={5} pb={10}>
          {
            Inputs.map((i, index) =>(
                  <FormControl key={index}>
                <FormControl.Label
                  _text={{
                    fontSize:"12px",
                    fontWeight:"bold"
                  }}
                > 
                  {i.label}
                </FormControl.Label>
                <Input
                borderColor={colors.main}
                borderWidth={0.5}
                bg={colors.subGreen}
                py={3}
                type={i.type}
                color={colors.main}
                fontSize={15}
                _focus={{bg:colors.subGreen,
                  borderColor:colors.MAIN,
                  borderWidth:1  
                }}
                />
              </FormControl>
            ))
          }
          <Buttone bg={colors.main} color={colors.white}>
          UPDATE PROFILE
          </Buttone>
        </VStack>
      </ScrollView>
    </Box>
  )
}

export default Profiles