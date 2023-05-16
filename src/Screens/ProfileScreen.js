import React from 'react'
import colors from '../data/colors'
import {Image,Heading, Center, Text} from 'native-base'
import Tabs from '../Profile/Tabs'
function ProfileScreen() {
  return (
   <>
    <Center bg={colors.main} pt={10} pb={6}>
      <Image 
      source={{
        uri:"https://w7.pngwing.com/pngs/328/599/png-transparent-male-avatar-user-profile-profile-heroes-necktie-recruiter-thumbnail.png"
      }}
      alt="profile"
      w={24}
      h={24}
      resizeMode="cover"
      rounded="full"
      />
      <Heading 
      bold 
      fontSize={15}
      isTruncated 
      my={2}
      color={colors.white}>User</Heading>
      <Text italic 
      fontSize={10}
      color={colors.white}>
        Joined June 12 2023
      </Text>
    </Center>
    <Tabs/>
   </>
  )
}

export default ProfileScreen