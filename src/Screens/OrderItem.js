import {Button, Box, FlatList,HStack,Pressable,Center,Image, VStack, Text } from 'native-base'
import React from 'react'
import colors from '../data/colors'
import products from '../data/Products'

const OrderItem = ()=> {
  return (
    <FlatList showsVerticalScrollIndicator={false}
      data={products}
      keyExtractor={(item) => item.id}
      renderItem={({item})=><Pressable>
        <Box mb={3}>
          <HStack 
          alignItems="center"
          bg={colors.white}
          shadow={1}
          rounded={10}
          overflow="hidden">
            <Center w="25%"
            bg={colors.deepGray}>
              <Image source={{uri:item.image}}
                alt={item.name}
                w="full"
                h={24}
                resizeMode="contain"
              />
              </Center>
                <VStack w="60%" px={2}>
                  <Text isTruncated color={colors.black} bold fontSize={12}>
                    {item.name}
                  </Text>

                  <Text color={colors.lightBlack} bold fontSize={15} mt={3}>
                    ${item.price}
                  </Text>
                </VStack>
                <Center><Button bg={colors.main} _pressed={{bg:colors.main}} _text={{
                  color:colors.white
                }}>
                  5</Button></Center>
          </HStack>
        </Box>
      </Pressable>}

    />
  )
}

export default OrderItem;