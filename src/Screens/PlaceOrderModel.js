import { Box,Button,Text,Center, Modal, VStack, HStack } from 'native-base'
import React, {useState} from 'react'
import Buttone from '../Components/Buttone'
import colors from '../data/colors'

const OrderInfos = [
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
const PlaceOrderModel = ()=> {
  const [showModel, setShowModel] = useState(false)
  return (
    <Center>
      <Buttone 
      onPress={()=>setShowModel(true)}
      bg={colors.black}
      color={colors.white}
      mt={5}>
        SHOW TOTAL
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
              {OrderInfos.map((i,index)=>(
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
            <Button flex={1} bg={colors.main} h={45} _text={{
              color:colors.white
            }}
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

export default PlaceOrderModel;