import React from 'react'
import {Box, 
        Heading,
        Button,
        Pressable,
        Image, Text,
         VStack,
          Input} from 'native-base'
import {Icon} from 'react-native-elements';
import colors from '../../data/colors';

function LoginScreen() {
  return (
   <Box flex={1} bg={colors.black} justifyContent="center">
      <Image flex={1} alt="Logo"
        resizeMode='cover'
        size="lg"
        w="full"
        source={require("../../assets/back.png")}
      />
      
      <Box
       w="full"
       h="full"
       position="absolute"
       top="0"
       px="6"
       justifyContent="center"
      >
        <Heading>LOGIN</Heading>
        <VStack space={8} pt="6">
          {/* EMAIL */}
          <Input
          InputLeftElement={
            <Icon 
              name="mail"
              type="material"
              color={colors.main}
            />
          } 
          variant="underlined"
          placeholder="user@gmail.com"
          w="70%"
          color={colors.main}
          borderBottomColor={colors.underline}/>

{/* PASSWORD */}
      <Input
          InputLeftElement={
            <Icon 
              name="lock"
              type="material-community"
              color={colors.main}
            />
          } 
          variant="underlined"
          placeholder="********" 
          w="70%"
          type="password"
          color={colors.main}
          borderBottomColor={colors.underline}/>
        </VStack>
        <Button 
        my={30} 
        w="40%" 
        rounded={50} 
        bg={colors.main}
        _pressed={{
          bg:colors.main
        }}>
          LOGIN
        </Button>
        <Pressable mt={4}>
          <Text color={colors.deepestGray} style={{marginLeft:30,marginTop:-5, fontWeight:'bold'}}>SIGN UP</Text>
        </Pressable>
      </Box>
   </Box>
  )
}

export default LoginScreen;