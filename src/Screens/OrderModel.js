import { Box,Pressable,Button,Text,Center, Modal, VStack, HStack, Image } from 'native-base'
import React, {useState} from 'react'
import Buttone from '../Components/Buttone'
import colors from '../data/colors'

const OrderInfo = [
  {
    title:"Products",
    price:125.77,
    color:"black"
  },
  {
    title:"Shipping",
    price:35.00,
    color:"black"
  },
  {
    title:"Tax",
    price:25.57,
    color:"black"
  },
  {
    title:"Total Amount",
    price:3500.25,
    color:"black"
  },
]
const OrderModel = ()=> {
  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone 
      onPress={()=>setShowModel(true)}
      bg={colors.main}
      color={colors.white}
      mt={5}>
        SHOW PAYMENT & TOTAL
      </Buttone>
      <Modal
      isOpen={showModel}
      onClose={()=>setShowModel(false)}
      size="lg"
      >
        <Modal.Content maxWidth={350}>
          <Modal.CloseButton/>
          <Modal.Header>Order</Modal.Header>
          <Modal.Body>
            <VStack space={7}>
              {OrderInfo.map((i,index)=>(
                  <HStack key={index} alignItems="center" justifyContent="space-between">
                  <Text fontWeight="medium">{i.title}</Text>
                  <Text color={i.color === "main" ? colors.main : colors.black} bold fontSiize={14}>
                    {i.price}
                  </Text>
                </HStack>
              ))}
              
            </VStack>
          </Modal.Body>
          <Modal.Footer>
          <Pressable w="full"
          justifyContent="center"
          bg={colors.paypal}
          h={45}
          rounded="full"
          overflow="hidden"
          onPress={()=>{
            ()=> setShowModel(false)
          }}>
            <Image
            source={require("../assets/paypal.png")}
            alt="paypal"
            resizeMode="contain"
            w="full"
            h={34}
            />
          </Pressable>
            <Button flex={1} 
            bg={colors.main} 
            h={45} _text={{
              color:colors.white
            }}
            mt={5}
            rounded="full"
            onPress={()=>setShowModel(false)}
            _pressed={{
              bg:colors.main
            }}>
              PLACE AN ORDER
            </Button>
          </Modal.Footer>
          
        </Modal.Content>
      </Modal>
    </Center>
  )
}

export default OrderModel;