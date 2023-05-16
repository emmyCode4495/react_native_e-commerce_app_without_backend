
import React from 'react'
import {Text, Box, HStack, Pressable, ScrollView, Button } from 'native-base'
import colors from '../data/colors'


const Orders = () => {
  return (
    <Box h="full" bg={colors.white} pt={5}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* PAID ORDER */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            bg={colors.deepGray}
            py={5}
            px={2}
          >
              <Text fontSize={9} bold color={colors.blue} isTruncated>
                98345678985433123324
              </Text>
              <Text fontSize={12} bold color={colors.black} isTruncated>
                PAID
              </Text>
              <Text fontSize={12} bold color={colors.black} isTruncated>
                Dec 12 2022
              </Text>
              <Button 
              px={7} 
              py={1.5}
              rounded={50}
              bg={colors.main}
              _text={{
                color:colors.white
              }} 
              _pressed={{
                bg:colors.main
              }}>
                $500
              </Button>
          </HStack>
        </Pressable>
        {/* NOT PAID */}
        <Pressable>
          <HStack
            space={4}
            justifyContent="space-between"
            alignItems="center"
            py={5}
            px={2}
          >
              <Text fontSize={9} bold color={colors.blue} isTruncated>
                98345678985433123324
              </Text>
              <Text fontSize={12} bold color={colors.black} isTruncated>
                NOT PAID
              </Text>
              <Text fontSize={12} bold color={colors.black} isTruncated>
                May 12 2022
              </Text>
              <Button 
              px={7} 
              py={1.5}
              rounded={50}
              bg={colors.red}
              _text={{
                color:colors.white
              }} 
              _pressed={{
                bg:colors.main
              }}>
                $500
              </Button>
          </HStack>
        </Pressable>
      </ScrollView>
    </Box>
  )
}

export default Orders