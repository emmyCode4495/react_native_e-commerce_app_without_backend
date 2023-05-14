import { View, Text } from 'react-native'
import React, {useState} from 'react'
import Buttone from '../Components/Buttone'
import {TextArea,CheckIcon,Box,Heading,Select, VStack,FormControl} from 'native-base'
import colors from '../data/colors'
import Rating from '../Components/Rating'
import Messages from './Notifications/Messages'

export default function Reviews() {
    const [ratings, setRatings] = useState('')
  return (
    <Box my={9}>
      <Heading bold fontSize={15} mb={2}>
        REVIEWS
        </Heading>
        {/* IF THERE IS NO REVIEW
        <Messages 
            color={colors.main} 
            bg={colors.deepGray} 
            size={10}
            bold
            children={"NO REVIEWS"}/> */}
        <Box 
        p={3} 
        bg={colors.deepestGray} 
        mt={5}
        rounded={5}>
            <Heading fontSize={15} colors={colors.black}>
                user Doe
            </Heading>
            <Rating value={4} />
            <Text my={3} fontSize={11}>May 14 2023</Text>
            <Messages 
            color={colors.black} 
            bg={colors.white} 
            size={10}
            children={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"}/>

        </Box>

        {/* <Box mt={6}>
            <Heading fontSize={15} bold mb={4}>
                REVIEW THIS PRODUCT  
            </Heading>
            <VStack space={6}>
                <FormControl>
                    <FormControl.Label _text={{
                        fontSize: "12px",
                        fontWeight:"bold"
                    }}>
                        Rating
                    </FormControl.Label>
                    <Select 
                    bg={colors.subGreen}
                    borderWidth={0}
                    rounded={5}
                    py={3}
                    placeholder="Choose Review"
                    _selectedItem={{
                        bg:colors.subGreen,
                        endIcon:<CheckIcon size={5}/>,

                    }}
                    selectedValue ={ratings}
                    onValueChange={(e)=> setRatings(e)}>
                    <Select.Item label="1 - Poor" value="1"/>
                    <Select.Item label="2 - Fair" value="2"/>
                    <Select.Item label="3 - Good" value="3"/>
                    <Select.Item label="4 - Very Good" value="4"/>
                    <Select.Item label="5 - Excellent" value="5"/>
                    </Select>
                </FormControl>
                <FormControl>
                    <FormControl.Label
                    _text={{
                        fontSize: "12px",
                        fontWeight:"bold"
                    }}
                    >
                        Comments
                    </FormControl.Label>
                    <TextArea 
                    h={20} 
                    w='full' 
                    placeholder="leave a comment..."
                    borderWidth={0}
                    bg={colors.subGreen}
                    py={4}
                    _focus={{
                        bg:colors.subGreen
                    }}
                    ></TextArea>
                </FormControl>
                <Buttone bg={colors.main} color={colors.white}>
                    SUBMIT
                </Buttone>
                <Messages 
            color={colors.white} 
            bg={colors.black} 
            size={10}
            children={"Please Login to review this product"}/>
            </VStack>
        </Box> */}
    </Box>
  );
} 