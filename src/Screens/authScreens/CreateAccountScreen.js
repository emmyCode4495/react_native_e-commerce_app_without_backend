import React from 'react'

import {Box, 
  Heading,
  Button,
  Pressable,
  Image, Text,
   VStack,
    Input} from 'native-base'
// import {Icon} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons from 'react-native-vector-icons/Entypo';
import ContactIcon from 'react-native-vector-icons/AntDesign';

import colors from '../../data/colors';

function CreateAccountScreen({navigation}) {
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
      <Heading>SIGN UP</Heading>
      <VStack space={8} pt="6">
        {/* USERNAME */}
        <Input
        InputLeftElement={
          <Icon 
            name="user"
            type="FontAwesome"
            size={20}
            color={colors.main}
            style={{marginRight:10}}
          />
        } 
        variant="underlined"
        placeholder="Emmanuel Pius"
        w="70%"
        type="text"
        color={colors.main}
        borderBottomColor={colors.underline}/>

{/* EMAIL */}
<Input
        InputLeftElement={
          <Icons 
          name="mail"
          type="material"
          size={20}
          color={colors.main}
          style={{marginRight:10}}
        />
        } 
        variant="underlined"
        placeholder="user@gmail.com"
        w="70%"
        color={colors.main}
        borderBottomColor={colors.underline}/>
{/* PHONE NUMBER */}
<Input
        InputLeftElement={
          <Icons
            name="phone"
            size={20}
            color={colors.main}
            style={{marginRight:10}}
          />
        } 
        variant="underlined"
        placeholder="+234 800 000 000"
        w="70%"
        type="numeric"
        color={colors.main}
        borderBottomColor={colors.underline}/>

{/* PASSWORD */}
    <Input
        InputLeftElement={
          <Icon 
            name="lock"
            type="material-community"
            color={colors.main}
            size={20}
            style={{marginRight:10}}
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
      }}
      onPress={()=>navigation.navigate("Login")}>
        SIGN UP
      </Button>
      <Pressable mt={4}
        onPress={()=>navigation.navigate("Login")}
      >
        <Text color={colors.deepestGray} style={{marginLeft:30,marginTop:-5, fontWeight:'bold'}}>LOG IN</Text>
      </Pressable>
    </Box>
 </Box>
  )
}

export default CreateAccountScreen;