import { Center, Heading, Text } from 'native-base'
import React from 'react'
import colors from '../data/colors'

const OrderInfo = ({icon,title,subTitle,text,success,danger}) => {
  return (
    <Center 
    bg={colors.white} 
    w={200} 
    py={2}
    rounded={10}
    shadow={4}
    mb={2}
    ml={5}
    mr={1}
    px={4}>
      <Center 
      bg={colors.main}
      w={60}
      h={60}
      rounded="full">
        {icon}
      </Center>
      <Heading bold
        fontSize={12}
        isTruncated
        mt={3}
        mb={2}
        color={colors.black}
      >{title}</Heading>
      <Text 
      fontSize={13}
      color={colors.black}
      italic
      bold
      >{subTitle}</Text>

    <Text 
      fontSize={13}
      color={colors.black}
      italic
      bold
      >{text}</Text>
      {/* STATUS */}
      {success && (
        <Center
        py={2}
        mt={2}
        rounded={5}
        w="full"
        bg={colors.blue}>
            <Text 
            fontSize={12}
            color={colors.white}>
                Paid on Jan 12 2021
            </Text>
        </Center>
      )}

{danger && (
        <Center
        py={2}
        mt={2}
        rounde={5}
        w="full"
        bg={colors.red}>
            <Text 
            fontSize={12}
            color={colors.white}>
                Not Delivered
            </Text>
        </Center>
      )}
    </Center>
  )
}

export default OrderInfo