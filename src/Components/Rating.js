import React from 'react'
import {HStack, Text} from 'native-base'
import colors from '../data/colors'
import Icons from 'react-native-vector-icons/Entypo';
import Icon from 'react-native-vector-icons/FontAwesome';
function Rating({value,text}) {
    const size = 8
    const color = colors.orange
  return (
    <HStack space={0.4} mt={1} alignItems="center">
        <Icon 
            name={value >= 1 ? "star" : value >= 0.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 2 ? "star" : value >= 1.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 3 ? "star" : value >= 2.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 4 ? "star" : value >= 3.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 5 ? "star" : value >= 4.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />

    <Icon 
            name={value >= 6 ? "star" : value >= 5.5 ? "star-half-o" : "star-o"}
            color={color}
            size={size}
        />
        {
            text &&(
                <Text fontSize={12} ml={2}>
                    {text}  
                    </Text>
            )
        }
       
    </HStack>
  )
}

export default Rating