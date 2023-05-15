import { Box,Button, Center, HStack, Image, Pressable, Text, VStack } from 'native-base'
import React from 'react'
import { SwipeListView } from 'react-native-swipe-list-view'
import products from '../data/Products'
import Icon from 'react-native-vector-icons/FontAwesome';

import colors from '../data/colors';

const Swiper = () =>(
    <SwipeListView
    rightOpenValue={-50}
    previewRowKey="0"
    previewOpenValue={-40}
    previewOpenDelay={3000}
    data={products}
    renderItem={renderItem}
    renderHiddenItem={renderHiddenItems}
    showsVerticalScrollIndicator={false}/>

    );

const renderItem = (data, rowMap) =>(
    <Pressable>
        <Box ml={6} mb={3}>
            <HStack 
            alignItems="center" 
            bg={colors.white}
            shadow={1}
            rounded={10}
            overflow="hidden">
                <Center w="25%" bg={colors.deepGray}>
                    <Image 
                    source={{uri: data.item.image}}
                    alt={data.item.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                    />
                </Center>
                <VStack w="60%" px={2} space={2}> 
                    <Text isTruncated 
                    color={colors.lightBlack}
                    bold
                    fontSize={12}>
                        ${data.item.name}
                    </Text>
                    <Text bold 
                    colors={colors.lightBlack} >
                        ${data.item.price}
                        </Text>
                </VStack>
                <Center>
                    <Button
                    bg={colors.main}
                    _pressed={{bg:colors.main}}
                    _text={{
                        color:colors.white
                    }}
                    >
                        5
                    </Button>
                </Center>
            </HStack>
        </Box>
    </Pressable>
);

// FOR HIDDEN ITEMS
const renderHiddenItems = (data) =>(
    <Pressable 
    w={50}
    roundedTopRight={10} 
    roundedBottomRight={10} 
    h="88%"
    ml="auto" 
    justifyContent="center"
    bg={colors.red}>
        <Center alignItems="center" space={2}>
            <Icon 
                name="trash"
                size={24}
                color={colors.white}
            />
        </Center>
    </Pressable>
);

const CartItems = () => {
  return (
    <Box mr={6}>
      <Swiper />
    </Box>
  )
}

export default CartItems;