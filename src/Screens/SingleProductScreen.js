import React,{useState} from 'react'
import {Spacer,Text,HStack,Box,Image,Heading,ScrollView} from 'native-base'
import products from '../data/Products'
import colors from '../data/colors'
import Rating from '../Components/Rating'
import NumericInput from 'react-native-numeric-input'
import Buttone from '../Components/Buttone'
import Reviews from '../Components/reviews'
import { useNavigation } from '@react-navigation/native'

function SingleProductScreen({route}) {
  const [value, setValue] = useState(0)
  const navigation = useNavigation()
  const products = route.params
  return (
<Box safeArea flex={1} bg={colors.white}>
  <ScrollView px={5} showsVerticalScrollIndicator={false}>
  <Image
    source={{uri:products.image}}
    alt="Image"
    w="full"
    h={300}
    resizeMode="contain"
  />
  <Heading 
  bold 
  fontSize={15} 
  mb={2} 
  lineHeight={22}>
    Plain white Nike Sneakers
  </Heading>
  <Rating value={products.rating} text={`${products.numReviews} reviews`}/>
  <HStack space={2} alignItems="center" my={5}>
    {
      products.countInStock > 0 ? (
        <NumericInput 
        value={value} 
        totalWidth={140}
        totalHeight={30}
        iconSize={25}
        rounded 
        step={1}
        // onChange={}
        maxValue={products.countInStock}
        minValue={0}
        borderColor={colors.deepGray}
        textColor={colors.black}
        iconStyle={{color:colors.white}}
        rightButtonBackgroundColor={colors.main}
        leftButtonBackgroundColor={colors.main}/>
      ): (
        <Heading bold color={colors.red} italic fontSize={12}>
        Out of stock
      </Heading>
      )
    }
    
    <Spacer />
    <Heading bold color={colors.black} fontSize={19}>
      ${products.price}
    </Heading>
  </HStack>
  <Text lineHeight={24} fontSize={12}>
  Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
  Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
  when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
  It has survived not only five centuries, but also the leap into electronic typesetting, 
  remaining essentially unchanged. 
  It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, 
  and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
  </Text>
  <Buttone bg={colors.main} 
  color={colors.white} mt={10} onPress={()=>navigation.navigate("Cart")}>
    ADD TO CART
  </Buttone>

  <Reviews/>
  </ScrollView>
</Box>
  )
}

export default SingleProductScreen;