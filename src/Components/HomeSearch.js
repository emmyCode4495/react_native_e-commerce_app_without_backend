import { View, Text } from 'react-native'
import React from 'react'
import { HStack,Input, Pressable,Box } from 'native-base';
import colors from '../data/colors'
import { Icon } from 'react-native-elements';
import Icons from 'react-native-vector-icons/Entypo';

function HomeSearch() {
  return (
    <HStack space={3} 
    w='full' 
    px={6} 
    bg={colors.main}
    py={4}
    alignItems="center"
    safeAreaTop>
      <Input placeholder="Nike, Puma, Adidas ..."
      w="85%"
      bg={colors.white}
      type="search"
      variants ="filled"
      h={12}
      borderWidth={0}
      _focus={{
        bg:colors.white
      }}
      />
      <Pressable ml={3}>
        <Icons
        name="shopping-cart"
        size={30}
        color={colors.white}
        type="material-community"
        />
        <Box
        px={1}
        rounded="full"
        position="absolute"
        top={-13}
        left={2}
        bg={colors.red}
        _text={{
          color:colors.white, 
          fontSize:'11px'
        }}
        >
          0
        </Box>
      </Pressable>
    </HStack>
  )
}


export default HomeSearch;