import { Text,Box, Flex,Pressable,ScrollView,Image,Heading, } from 'native-base'
import React from 'react'
import products from '../data/Products'
import colors from '../data/colors'
import Rating from '../Components/Rating'
import { useNavigation } from '@react-navigation/native'

function HomeProducts() {
    const navigation = useNavigation()
  return (
   <ScrollView showsVerticalScrollIndicator={false}>
    <Flex
    flexWrap="wrap"
    direction="row"
    justifyContent="space-between"
    px={6}
    >
        {
            products.map((product)=>(
                <Pressable
                onPress={()=>navigation.navigate("Single",product)}
                key={product.id}
                w="47%"
                bg={colors.white}
                rounded="md"
                shadow={2}
                pt={0.3}
                my={3}
                pb={2}
                overflow="hidden"
                >
                    <Image 
                    source={{uri:product.image}}
                    alt={product.name}
                    w="full"
                    h={24}
                    resizeMode="contain"
                    />
                    <Box
                    px={4}
                    pt={1}
                    >
                        <Heading size="sm" bold>
                            ${product.price}
                        </Heading>
                        <Text fontSize={10} mt={1} isTruncated w="full">
                            {product.name}
                            </Text>
                        <Rating value={product.rating}/>    
                    </Box>
                </Pressable>
            ))
        }
    </Flex>

   </ScrollView>
  )
}

export default HomeProducts;